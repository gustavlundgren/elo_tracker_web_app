from src import app
from firebase_functions import https_fn

# Main entry point for Firebase Functions
@https_fn.on_request()
def functions(req: https_fn.Request) -> https_fn.Response:
    with app.request_context(req.environ):  # Use Flask's request context
        return app.full_dispatch_request()  # Dispatch the request to Flask