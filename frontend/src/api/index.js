//import { getMaxListeners } from "events";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// API setup
import axios from "axios";
const BASE_URL = 'https://firebase-function-qwcbnzzvka-uc.a.run.app/api'


// export const auth = getAuth(app)
import { auth } from "./firebase-config.js";

async function get_player_for_user() {
    try {
        let response = await get_player(auth.currentUser.uid)

        return response;

    } catch (err) {
        console.log(err);

    }
}

async function delete_game(gid) {
    try {
        let response = await axios.get('/games/delete/' + gid);
        let data = response.data;
        console.log(data);
    } catch (error) {
        console.error('Error fetching games:', error);
    }

}


async function verify_game(gid, token) {
    try {
        const response = await axios.post(BASE_URL + '/games/verify', { gid, token }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;
        console.log("Verified game response: ");
        console.log(data);
        return data;

    } catch (error) {
        console.error('Error creating new player:', error);
    }
}

async function new_player(username, token) {
    try {
        const response = await axios.post(BASE_URL + '/players/new', { token, username }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = response.data;
        console.log("New player");
        console.log(data);

    } catch (error) {
        console.error('Error creating new player:', error);
    }
}


async function new_user(username, email, pwd) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, pwd);
        const token = await result.user.getIdToken();


        const response = await axios.post(BASE_URL + '/auth', { token, email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const data = response.data;
        console.log("New user: ");
        console.log(data);
        new_player(username, token);
    } catch (error) {
        console.error('Error creating new user:', error);
    }
}

async function login(email, pwd) {
    try {
        let result = await signInWithEmailAndPassword(auth, email, pwd);


        const token = await result.user.getIdToken();

        const response = await axios.post(BASE_URL + '/auth', { token, email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;
        console.log(data);
        return data
    } catch (error) {
        console.error('Error during login:', error);
    }
}

async function logout() {
    try {
        await auth.signOut()
    } catch (err) {
        console.log(err);
    }
}



async function get_game_by_uid(uid) {
    try {
        let response = await axios.get(BASE_URL + '/games/get/' + uid);
        let data = response.data;
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}


async function get_games() {
    try {
        let response = await axios.get(BASE_URL + '/games/get');
        let data = response.data;
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

async function get_player_games() {
    let uid = auth.currentUser.uid;
    try {
        let response = await axios.get(BASE_URL + '/games/player/' + uid);
        let data = response.data;
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player games:', error);
    }
}

async function add_game(players, winner) {
    const token = await auth.currentUser.getIdToken()

    try {
        let response = await axios.post(BASE_URL + '/games/add', { players, winner, token }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error adding game:', error);
    }
}

async function get_unverified() {
    let uid = auth.currentUser.uid

    try {
        let response = await axios.get(BASE_URL + '/games/unverified/' + uid);
        let data = response.data;
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player:', error);
    }
}


async function get_all_players() {
    try {
        let response = await axios.get(BASE_URL + '/players/get/all');
        let data = response.data
        return data
    } catch (error) {
        console.error('Error fetching player:', error);
    }
}


async function get_player(uid) {
    try {
        let response = await axios.get(BASE_URL + '/players/get/' + uid);
        console.log(await response);
        let data = response.data;
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player:', error);
    }
}


export { add_game, new_player, new_user, get_game_by_uid, get_player, get_games, get_player_games, get_unverified, delete_game, login, logout, verify_game, get_all_players, get_player_for_user }