<template>
  <div class="leaderboard"> 
    <h2>Player Leaderboard</h2>
    <ul>
      <li v-for="(player, index) in sortedPlayers" :key="player.uid">
        
        <span :class="getRankClass(index)" class="rank">#{{ index + 1 }}</span>
        <span class="name">{{ player.username }}</span>
        <span class="elo">{{ player.elo }}</span>
      </li>
    </ul>
  </div> 
  

</template>

<script>
    import { get_all_players } from "../api/index.js"; 
    import { toRaw } from 'vue'; // Import toRaw if needed

  export default {
    data() {
      return {
        players: []
      };
    },
    async created() {
      try {
        const playersData = await get_all_players();
        this.players = toRaw(playersData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    },
    watch: {
      players() {
        console.log("currenly peepeing poopeo")        
      }
    },
    computed: {
      sortedPlayers() {
        console.log("javascript suck")
        if (this.players) {
          return [...this.players].sort((a, b) => b.elo - a.elo);
        }

      }
    },
    methods: {
      getRankClass(index) {
        if (index === 0) return 'gold';  // 1st place
        if (index === 1) return 'silver';  // 2nd place
        if (index === 2) return 'bronze';  // 3rd place
        return '';  // No specific class for others
      }
    }
  };
</script>


<style scoped>
.leaderboard {
  max-width: 400px;
  margin: auto;
  background: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #555;
}

.rank {
  font-weight: bold;
  color: white; /* Default color for the rank */
  margin-right: 5px;  /* Adds space between rank and name */
}

.name {
  flex-grow: 1;
  text-align: left;
  color: #bb86fe;
}

.elo {
  font-weight: bold;
}

/* Styling for 1st, 2nd, and 3rd places */
.gold {
  color: gold;
}

.silver {
  color: silver;
}

.bronze {
  color: #cd7f32;  /* Bronze color */
}
</style>
