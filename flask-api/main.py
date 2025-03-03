# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`
from flask import Flask, jsonify, request
from flask_cors import CORS
from firebase_admin import initialize_app, firestore, auth
from firebase_functions import https_fn
from elo import process_game     
import datetime


# Initialize Firebase
#cred = credentials.Certificate("/home/lundgren/elo_tracker_web_app/serviceAccountKey.json")
initialize_app() # Cred for local

app = Flask(__name__)
CORS(app)

# Game routes
# GET
@app.route('/api/games/get', methods=['GET'])
def get_games():
    """
    Get all the games from the database
    
    Returns the data as a list of json
    """
    try:
        db = firestore.client()
        
        docs = db.collection('games').get()
        return jsonify({'data': [doc.to_dict() for doc in docs]}), 200
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/api/games/player/<uid>', methods=['GET'])
def get_player_games(uid):
    """
    Get all the games that macth the given uid 
    """
    try:
        db = firestore.client()
        
        docs = db.collection('players').where('uid', '==', uid).get()
        username = docs[0].to_dict()['username']
        
        docs = db.collection('games').where('players', 'array_contains', username).get()
        
        return jsonify({'data': [doc.to_dict() for doc in docs]}), 200
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/api/games/unverified/<uid>')
def get_unverfied_games(uid):
    """
    Get all the unverified games for a player uid
    """
    try:
        db = firestore.client()
        
        docs = db.collection('players').where('uid', '==', uid).get()
        username = docs[0].to_dict()['username']
        
        docs = db.collection('games').where('players', 'array_contains', username).where('verified', '==', False).get()
        return jsonify({'data': [doc.to_dict() for doc in docs], 'uid': uid}), 200
    except Exception as e:
        return jsonify({'error': str(e)})

# POST
@app.route('/api/games/verify', methods=['POST'])
def verify_game():
    """
    Verify a game
    """
    data = request.json
    gid = data.get('gid')
    token = data.get('token')
    uid = ""
    
    if not gid:
        return jsonify({'error': 'Game id is needed' }), 401
    
    if not token:
        return jsonify({'error': 'Token is needed' }), 401
    
    try:
        decoded_token = auth.verify_id_token(token)
        uid = decoded_token['uid']

    except Exception as e:
        return jsonify({'error': str(e)})
    
    try:
        db = firestore.client()
        
        player_ref = db.collection('players').where("uid", "==", uid)
        player = player_ref.get()
        
        username = player[0].to_dict()['username']

    except Exception as e:
        return jsonify({'error': str(e)})
    
    
    try:
        game_ref = db.collection('games').document(gid)
        game = game_ref.get()
        
        if game.get('players')[1] != username:
            return jsonify({'error': 'Invalid user for verification'}), 403
        
        game_ref.update({"verified": True})
        process_game()
        return jsonify({'message': "Successfully verified the game" }), 200
    except Exception as e:
        return jsonify({'error': str(e)})
        
@app.route('/api/games/add', methods=['POST'])
def add_game():
    """
    Add a new game to the datatbase
    """
    data = request.json
    players = data.get('players')
    winner = data.get('winner')
    token = data.get('token')
    
    if len(players) != 2 or not winner:
        return jsonify({'error': 'Players and winner required'}), 400
    
    if winner not in players:
        return jsonify({'error': 'Winner must be one of the players in the game'}), 400
    
    if not token:
        return jsonify({'error': 'Please supply a token'}), 400
    
    try:
        db = firestore.client()
        
        players_ref = db.collection('players')
        docs = players_ref.stream()
        
        db_players = [dp.to_dict() for dp in list(docs)]
        db_usernames = [dp['username'] for dp in db_players] 
        
        if players[0] not in db_usernames or players[1] not in db_usernames:
            return jsonify({'error': 'Invalid players'}), 400
        
    except Exception as e:
        return jsonify({'error': str(e)})

    try:
        # Verify the toke from the user
        auth.verify_id_token(token)
        
        # Make a new document and get the id 
        doc_ref = db.collection('games').document()
        gid = doc_ref.id
        
        # Add the new game to the collection
        doc_ref.set({
            'id': gid,
            'players': players, 
            'winner': winner, 
            'time': datetime.datetime.now(datetime.timezone.utc).timestamp(),
            'verified': False
        })
        
        return jsonify({'message': 'Game created successfully'}), 201
        
    except Exception as e:
        return jsonify({'error': str(e)})    

# DELETE
@app.route('/api/games/delete/<gid>', methods=['DELETE'])
def delete_game(gid):
    data = request.json
    token = data.get('token')
    
    try:
        decoded_token = auth.verify_id_token(token)
        
    except Exception as e:
        return jsonify({'error': str(e)})
    
    
    try:
        db = firestore.client()
        
        player_ref = db.collection('players').where('uid', '==', decoded_token['uid'])
        player = player_ref.get()
        
    except Exception as e:
        return jsonify({'error': str(e)})
    
    try:
        game_ref = db.collection('games').document(gid)
        game = game_ref.get()
        
        # Verify that the user that is deleting the game is part of the game 
        if player[0].to_dict()['username'] not in game.to_dict()['players']:
            return jsonify({'error': f'The player {player[0].to_dict()["username"]} is not one of the players in the game.'}), 401
        # And that the game is not verified
        if game.to_dict()['verified']:
            return jsonify({'error': 'The game is allready verified. Contact Pdiddy to delete a game that is verified'}), 402
         
        game_ref.delete()
        
        return jsonify({'message': 'Successfully deleted game: ' + gid})
        
    except Exception as e:
        return jsonify({'error': str(e)})

# Players
#GET  
@app.route('/api/players/get/<uid>', methods=['GET'])
def get_player(uid):
    """
    Get a player with a given uid
    """
    if not uid:
        return jsonify({'error': 'uid is requred to get the user'}), 400
    
    try:
        db = firestore.client()
        
        player = db.collection('players').where("uid", "==", uid).get()
    except Exception as e:
        return jsonify({'error': str(e)})
    
    if not player:
        return jsonify({'error': 'The user does not exist'}), 404
    
    return jsonify(player[0].to_dict()), 200


#GET  
#slighlt experimental
@app.route('/api/players/get/all', methods=['GET'])
def get_all_players():
    """
    Gets all players
    """
    try:
        db = firestore.client()      
        all_players = db.collection('players').get()
    except Exception as e:
        return jsonify({'error': str(e)})
    
    if not all_players:
        return jsonify({'error': 'There are no players, somehow?'}), 404
    
    return jsonify([p.to_dict() for p in all_players]), 200

# POST
@app.route('/api/players/new', methods=['POST'])
def new_player():
    """
    Create a new player with a username and a reference to the uid of a valid user
    """
    data = request.json
    username = data.get('username')
    token = data.get("token")
    
    try:
        db = firestore.client()
        
        decoded_token = auth.verify_id_token(token)
        uid = decoded_token['uid']
        
        if len(db.collection('players').where("uid", "==", uid).get()) > 0:
            return jsonify({'error': 'The user allready have a registered player'}), 403
        
        if len(db.collection('players').where('username', '==', username).get()) > 0:
            return jsonify({'error': 'The supplied username is taken'}), 403

        # Add a new player connected to a user with uid
        db.collection('players').add({
            "username": username,
            "elo": 1000, 
            "uid": uid
        })
        
        return jsonify({'message': 'Successfully created a player for ' + uid}), 201
        
        
    except Exception as e:
        return jsonify({'error': str(e)})

# Auth
@app.route('/api/auth', methods=['POST'])
def login():
    data = request.json
    token = data.get('token')
    email = data.get('email')
    
    if not token:
        return jsonify({'error': 'Token is needed'}), 401
    
    if not email:
        return jsonify({'error': 'Email needed'}), 401
    
    try:
        decoded_token = auth.verify_id_token(token)
        
        if decoded_token['email'] != email:
            return jsonify({'error': 'Incorrect token for this user'}), 401
        
        return jsonify({'uid': decoded_token['uid']}), 200
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)}), 401


@https_fn.on_request(max_instances=1)
def firebase_function(req: https_fn.Request) -> https_fn.Response:
    with app.request_context(req.environ):
        return app.full_dispatch_request()