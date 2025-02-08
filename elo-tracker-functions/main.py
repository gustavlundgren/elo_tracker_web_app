from flask import Flask
from firebase_admin import firestore, initialize_app
from firebase_functions import https_fn


# Initialize Flask
app = Flask(__name__)

# Initialize Firebase
#cred = credentials.Certificate("/home/lundgren/elo_tracker_web_app/serviceAccountKey.json")
initialize_app() # Cred for local
db = firestore.client()

# Import and register blueprints
from src.routes import routes_blueprint
from src.auth import auth_blueprint

app.register_blueprint(routes_blueprint)
app.register_blueprint(auth_blueprint)


def create_firebase_function(app: Flask):
    @https_fn.on_request()
    def functions(req: https_fn.Request) -> https_fn.Response:
        # Use Flask's request context for Firebase Functions
        with app.request_context(req.environ):
            return app.full_dispatch_request()