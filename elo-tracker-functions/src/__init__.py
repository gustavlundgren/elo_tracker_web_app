from flask import Flask
from config import Config
import firebase_admin
from firebase_admin import credentials, firestore
import os

# Initialize Flask
app = Flask(__name__)
app.config.from_object(Config)

# Initialize Firebase
cred = credentials.Certificate(os.path.join(os.getcwd(), app.config["FIREBASE_CREDENTIALS"]))
firebase_admin.initialize_app(cred)
db = firestore.client()


# Import and register blueprints
from src.routes import routes_blueprint
from src.auth import auth_blueprint

app.register_blueprint(routes_blueprint)
app.register_blueprint(auth_blueprint)