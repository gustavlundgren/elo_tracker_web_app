import React, { useState } from 'react';
import { add_game } from '../../api/index.js';
import './AddGame.css'

const AddGame = () => {
    const [opponent, setOpponent] = useState('');
    const [winner, setWinner] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await add_game([opponent, winner], winner);
            console.log(`Game added: Opponent - ${opponent}, Winner - ${winner}`);
            setOpponent('');
            setWinner('');
        } catch (error) {
            console.error("Error adding game:", error);
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
