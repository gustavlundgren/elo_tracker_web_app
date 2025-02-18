import React, { useState } from 'react';
import { add_game, get_player_for_user } from '../../api/index.js';
import './AddGame.css'

const AddGame = () => {
    const [opponent, setOpponent] = useState('');
    const [winner, setWinner] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        try{
            const currUser = await get_player_for_user()
            try {
                const response = await add_game([opponent, currUser.username], winner);
    
                if (response.status === 400){
                    alert("Error: " + response.data.error)
                }else{
                    console.log(`Game added: Opponent - ${opponent}, Winner - ${winner}`);
                    setOpponent('');
                    setWinner('');
                    alert("Game added succsesfully!")
                }      
    
                console.log(response.status )
            } catch (error) {
                alert(error)
                console.error("Error adding game:", error);
            }
        }catch(error){
            console.error("Error finding user:", error);

        }


        
    };

    return (
        <div className="add-game-container">
            <h2>Add Game</h2>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="opponent" style={{ fontWeight: 'bold' }}>Opponent:</label>
                    <input
                        style={{ fontStyle: 'italic' }}
                        type="text"
                        id="opponent"
                        value={opponent}
                        onChange={(e) => setOpponent(e.target.value)}
                        placeholder="Enter opponent's username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="winner" style={{ fontWeight: 'bold' }}>Winner:</label>
                    <input
                        style={{ fontStyle: 'italic' }}
                        type="text"
                        id="winner"
                        value={winner}
                        onChange={(e) => setWinner(e.target.value)}
                        placeholder="Enter winner's username"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn" id="submit_button">Add Game</button>
            </form>
        </div>
    );
};

export default AddGame;
