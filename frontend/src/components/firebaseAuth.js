import { getAuth, onAuthStateChanged } from "firebase/auth";
import { reactive } from "vue";
import router from "../router/index"

// Create a reactive object to track the current user
export const authState = reactive({
    user: null,
    initialized: false,
});

// Initialize Firebase Authentication
const auth = getAuth();

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    authState.user = user; // Update the reactive user state
    authState.initialized = true; // Mark as initialized after the first check

    auth.currentUser = user;

    if (user) {
        console.log("User: " + user.uid);
        console.log(authState.initialized);
    }


    if (router.currentRoute.value.path == "/login") {
        router.push("/leaderboard")
    }
});

export const getCurrentUser = () => {
    return authState.user;
};

export const isAuthenticated = () => {
    return authState.user !== null;
};