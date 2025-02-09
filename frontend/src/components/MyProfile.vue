<template>
    <div class="my-profile">
        <h1 style="font-weight: bold; font-style: italic;">My Profile</h1>
        <div class="profile-info">
            <p><strong>Username:</strong> {{ username }}</p>
            <p><strong>ELO:</strong> {{ elo }}</p>
        </div>

        <!-- Game History section -->
        <div class="game-history">
            <h2>Game History</h2>
            <div class="scrollable-history">
                <!-- Reverse the array so that the most recent game appears at the top -->
                <ul>
                    <li v-for="game in sortedGameHistory" :key="game.id">
                        {{ game.date }} - {{ game.opponent }} - {{ game.result }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="my-profile" id="gameRequest">
        <h1 style="font-weight: bold; font-style: italic; font-size: 20px; margin-bottom: 15px;">Pending Requests</h1>

        <!-- Show pending requests or "You have no pending game requests." -->
        <div v-if="unverified.length === 0">
            <p>You have no pending game requests.</p>
        </div>
        <ul v-else>
            <li v-for="request in pendingRequests" :key="request.id">
                {{ request.game }} - {{ request.opponent }} 
                <button @click="acceptRequest(request)">Accept</button>
                <button @click="rejectRequest(request)" id="reject-btn">Reject</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { toRaw } from 'vue';
import { get_unverified, verify_game, delete_game, get_player_games } from '../api/index.js';

export default {
    data() {
        return {
            unverified: [],       // For storing unverified games
            playerGames: [],      // For storing player game history
        };
    },
    
    
    async created() {
        // Fetch initial data when component is created
        try {
            const pg = await get_player_games()
            const ug = await get_unverified()
            
            this.unverified = toRaw(ug);
            this.playerGames = toRaw(pg);
            console.log(this.unverified);
            console.log(this.playerGames);
        } catch (err) {
            console.log(err);
        }
        
    },
    computed: {
        sortedGameHistory() {
            // Ensure that playerGames is an array before applying reverse
            if (this.playerGames && Array.isArray(this.playerGames)) {
                return this.playerGames.slice().reverse(); // Reverse the game history array
            }
            return []; // Return an empty array if playerGames is not available
        }
    },
    methods: {
        acceptRequest(request) {
            console.log('Accepted:', request);
            this.removeRequest(request);
            verify_game(request.id); // Replace with actual game verification logic
        },
        rejectRequest(request) {
            console.log('Rejected:', request);
            this.removeRequest(request);
            delete_game(request.id); // Replace with actual game deletion logic
        },
        removeRequest(request) {
            // Remove the request from pendingRequests
            this.pendingRequests = this.pendingRequests.filter(r => r.id !== request.id);
        }
    }
};
</script>

<style scoped>
.my-profile {
    padding: 20px;
    background-color: #1e1e1e;
    color: white;
    border-radius: 10px;
    size: fixed;
}

.profile-info {
    margin-bottom: 20px;
    color: white;
}

.game-history {
    margin-top: 20px;
}

.scrollable-history {
    max-height: 300px; /* Set a fixed height for scroll */
    overflow-y: auto; /* Enable vertical scrolling */
    padding-right: 10px; /* Optional: add space to prevent scroll from hiding text */
}

.game-history ul {
    list-style-type: none;
    padding: 0;
    color: white;
    overflow: autoscroll;
}

.game-history li {
    margin-bottom: 10px;
    color: white;
}

#gameRequest {
    margin-top: 20px;
}

#gameRequest ul {
    list-style-type: none;
    padding: 0;
    color: white;
}

#gameRequest li {
    margin-bottom: 10px;
}

#reject-btn {
    background-color: #db2e1a;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
