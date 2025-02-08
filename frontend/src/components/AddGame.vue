from index.js

<template>
    <div class="add-game-container">
      <h2>Add Game</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label style="font-weight: bold;" for="opponent">Opponent:</label>
          <input 
            style="font-style: italic;"
            type="text"
            id="opponent"
            v-model="opponent"
            placeholder="Enter opponent's username"
            required
          />
        </div>
        <div class="form-group">
          <label style="font-weight: bold;" for="winner">Winner:</label>
          <input
            style="font-style: italic;"
            type="text"
            id="winner"
            v-model="winner"
            placeholder="Enter winner's username"
            required
          />
        </div>
        <button type="submit" class="submit-btn" id="submit_button">Add Game</button>
      </form>
    </div>
  </template>
  
  <script>
    import { add_game } from '../api/index.js';
    export default {
      data() {
        return {
          opponent: '',
          winner: '',
        };
      },
      methods: {
        async submitForm() {
          try {
            await add_game([this.opponent, this.winner], this.winner);
            console.log(`Game added: Opponent - ${this.opponent}, Winner - ${this.winner}`);
            this.opponent = '';
            this.winner = '';
          } catch (error) {
            console.error("Error adding game:", error);
          }
        }
      },
    };
    document.getElementById(submit_button).onclick({

    })
  
  </script>
  
  <style scoped>
  .add-game-container {
    background-color: #1e1e1e;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 1em;
  }
  
  input:focus {
    outline: none;
    border: 2px solid #bb86fe;
  }
  
  .submit-btn {
    background-color: #bb86fe;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.5em;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    width: 100%;
  }
  
  .submit-btn:hover {
    background-color: #bb86fe;
  }
  </style>
  