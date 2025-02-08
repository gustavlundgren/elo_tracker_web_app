# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`
from flask import Flask
from flask_cors import CORS
from firebase_functions import https_fn
from firebase_admin import initialize_app, firestore

initialize_app()

app = Flask(__name__)
CORS(app)

# Initialize Firebase
#cred = credentials.Certificate("/home/lundgren/elo_tracker_web_app/serviceAccountKey.json")
initialize_app() # Cred for local
db = firestore.client()

# Import and register blueprints
from src.routes import routes_blueprint
from src.auth import auth_blueprint

app.register_blueprint(routes_blueprint)
app.register_blueprint(auth_blueprint)

@https_fn.on_request()
def functions(req: https_fn.Request) -> https_fn.Response:
    # Use Flask's request context for Firebase Functions
    with app.request_context(req.environ):
        return app.full_dispatch_request() 