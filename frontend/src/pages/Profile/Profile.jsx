import React, { useState, useEffect, } from 'react';
import { get_unverified, verify_game, delete_game, get_player_games, get_player_for_user, logout } from '../../api/index';
import "./Profile.css"
import { useNavigate } from 'react-router';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [elo, setElo] = useState('');
    const [pendingRequests, setPendingRequests] = useState([]);
    const [playerGames, setPlayerGames] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch initial data when component is mounted
        const fetchData = async () => {

            try {
                const currUser = await get_player_for_user()
                setUsername(currUser.username);
                setElo(Math.floor(currUser.elo));
            } catch (err) {
                console.log(err);
            }

            try {
                const pg = await get_player_games();
                const ug = await get_unverified();

                for (let index = 0; index < ug.data.length; index++) {
                    const date = new Date(ug.data[index].time);

                    const day = date.getDate().toString().padStart(2, "0");
                    const hour = date.getHours().toString().padStart(2, "0");
                    const min = date.getMinutes().toString().padStart(2, "0");

                    ug.data[index].time = "TNR " + day + hour + min;
                }

                setPendingRequests(ug.data);

                for (let index = 0; index < pg.data.length; index++) {
                    const date = new Date(pg.data[index].time);

                    const day = date.getDate().toString().padStart(2, "0");
                    const hour = date.getHours().toString().padStart(2, "0");
                    const min = date.getMinutes().toString().padStart(2, "0");

                    pg.data[index].time = "TNR " + day + hour + min;
                }

                setPlayerGames(pg.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []); // Empty dependency array to mimic componentDidMount in React

    const sortedGameHistory = () => {
        return playerGames; // Reverse the game history array
    };

    const acceptRequest = async (game) => {
        console.log('Accepted:', game);
        removeRequest(game);
        await verify_game(game.id); // Replace with actual game verification logic
    };

    const rejectRequest = async (game) => {
        console.log('Rejected:', game);
        removeRequest(game);
        await delete_game(game.id); // Replace with actual game deletion logic
    };

    const removeRequest = (game) => {
        // Remove the request from pendingRequests
        setPendingRequests(pendingRequests.filter(r => r.id !== game.id));
    };

    const handleLogout = () => {
        logout();
        navigate("/login")
    };

    return (
        <div>
            <div className="my-profile">
                <h1 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>My Profile</h1>
                <div className="profile-info">
                    <p><strong>Username:</strong> {username}</p>
                    <p><strong>ELO:</strong> {elo}</p>
                </div>

                <button onClick={handleLogout}>Log out</button>

                {/* Game History section */}
                <div className="game-history">
                    <h2>Game History</h2>
                    <div className="scrollable-history">
                        {/* Reverse the array so that the most recent game appears at the top */}
                        <ul>
                            {sortedGameHistory().map(game =>
                                game.verified ? (
                                    <li key={game.id}>
                                        Time: {game.time} <br />
                                        Players: {game.players[0]} vs {game.players[1]} <br />
                                        Winner: {game.winner}
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="my-profile" id="gameRequest">
                <h1 style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '20px', marginBottom: '15px' }}>
                    Pending Requests
                </h1>

                {/* Show pending requests or "You have no pending game requests." */}
                {pendingRequests.length === 0 ? (
                    <p>You have no pending game requests.</p>
                ) : (
                    <ul>
                        {pendingRequests.map(game => (
                            <li key={game.id}>
                                {game.time} <br /> From: {game.players[0]} <br /> Winner: {game.winner}
                                <button onClick={() => acceptRequest(game)}>Accept</button>
                                <button onClick={() => rejectRequest(game)} id="reject-btn">Reject</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Profile;
