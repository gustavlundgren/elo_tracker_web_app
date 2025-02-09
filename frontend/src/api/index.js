//import { getMaxListeners } from "events";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
var url = 'https://firebase-function-qwcbnzzvka-uc.a.run.app/api'

// const app = initializeApp()
// setPersistence(auth, browserSessionPersistence);

// const auth = getAuth(app)
import { auth } from "../api/firebase-config.js";

async function delete_game(gid) {
    try {
        let response = await fetch(url + '/games/delete/' + gid);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching games:', error);
    }

}


async function verify_game(gid, token) {
    try {
        const response = await fetch(url + '/games/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ gid, token })
        });

        const data = await response.json();
        console.log("Verified game response: ");
        console.log(data);

    } catch (error) {
        console.error('Error creating new player:', error);
    }
}

async function new_player(username, token) {
    try {

        console.log(JSON.stringify({ token, username }));
        const response = await fetch(url + '/players/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, username })
        });

        const data = await response.json();
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


        const response = await fetch(url + '/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, email })
        });


        const data = await response.json();
        console.log("New user: ");
        console.log(data);
        new_player(username, token);
    } catch (error) {
        console.error('Error creating new user:', error);
    }

}

async function login(email, pwd) {
    try {
        result = await signInWithEmailAndPassword(auth, email, pwd);


        const token = await result.user.getIdToken();

        const response = await fetch(url + '/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, token })
        });

        const data = await response.json();
        //console.log('Backend Response:', data);
    } catch (error) {
        console.error('Error during login:', error);
    }
}



async function get_game_by_uid(uid) {
    try {
        let response = await fetch(url + '/games/get/' + uid);
        let data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}


async function get_games() {

    console.log(auth.currentUser.user.reloadUserInfo.email);

    try {
        let response = await fetch(url + '/games/get');
        let data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

async function get_player_games() {
    let uid = auth.currentUser.uid;
    try {
        let response = await fetch(url + '/games/player/' + uid);
        let data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player games:', error);
    }
}

async function add_game(players, winner) {
    const token = await auth.currentUser.user.getIdToken();
    //console.log(JSON.stringify({ players, winner, token }));
    try {
        let response = await fetch(url + '/games/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ players, winner, token })
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error adding game:', error);
    }
}

async function get_unverified() {
    let uid = auth.currentUser.uid

    try {
        let response = await fetch(url + '/games/unverified/' + uid);
        let data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player:', error);
    }
}


async function get_all_players() {
    try {
        let response = await fetch(url + '/players/get/all');
        console.log(await response);
        let data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player:', error);
    }
}


async function get_player(uid) {
    try {
        let response = await fetch(url + '/players/get/' + uid);
        console.log(await response);
        let data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching player:', error);
    }
}


export { add_game, new_player, new_user, get_game_by_uid, get_player, get_games, get_player_games, get_unverified, delete_game, login, verify_game, get_all_players }

//login("linda.bergstig@gmail.com", "password").then(() =>{ 
//new_user("Pdiddy","linda.bergstig@gmail.com", "password")//});
//login("linda.bergstig@gmail.com", "password").then(() => { add_game(['Pdiddy', 'Dootz'], 'Pdiddy') })
//await new Promise(r => setTimeout(r, 1000));

//await new Promise(r => setTimeout(r, 1000));
//onsole.log(auth.currentUser.user.uid)
//const token = await auth.currentUser.user.getIdToken();
//get_player(auth.currentUser.user.uid)
