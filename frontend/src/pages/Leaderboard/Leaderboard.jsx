import React, { useEffect, useState } from 'react';
import { get_all_players } from '../../api/index.js';
import "./Leaderboard.css"

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const playersData = await get_all_players();
                setPlayers(playersData);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, []);

    const sortedPlayers = [...players].sort((a, b) => b.elo - a.elo);

    const getRankClass = (index) => {
        if (index === 0) return 'gold';  // 1st place
        if (index === 1) return 'silver';  // 2nd place
        if (index === 2) return 'bronze';  // 3rd place
        return '';  // No specific class for others
    };

    return (
        <div className="leaderboard">
            <h2>Player Leaderboard</h2>
            <ul>
                {sortedPlayers.map((player, index) => (
                    <li key={player.uid}>
                        <span className={`rank ${getRankClass(index)}`}>#{index + 1}</span>
                        <span className="name">{player.username}</span>
                        <span className="elo">{Math.round(player.elo*10)/10}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
