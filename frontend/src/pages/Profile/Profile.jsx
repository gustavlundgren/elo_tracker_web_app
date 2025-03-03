import React, { useState, useEffect, } from 'react';
import { get_unverified, get_player_games, get_player_for_user, logout } from '../../api/index';
import "./Profile.css"
import { useNavigate } from 'react-router';
import UnverifiedGame from '../../components/UnverifiedGame';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [elo, setElo] = useState('');
    const [playerGames, setPlayerGames] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
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
        return [...playerGames].sort((a, b) => new Date(b.time) - new Date(a.time));
    };

    const handleLogout = () => {
        logout();
        navigate("/login", { state: { from: location.pathname } })
    };

    const removeRequest = (request) => {
        // Remove the request from pendingRequests
        setPendingRequests(pendingRequests.filter(r => r.id !== request.id));
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
                            {sortedGameHistory().map(game => (
                                <li key={game.id}>
                                    Time: {game.time} <br /> Players: {game.players[0]} vs {game.players[1]} <br /> Winner: {game.winner}
                                </li>
                            ))}
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
                            < li key={game.id} >
                                <UnverifiedGame game={game} removeRequest={removeRequest} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div >
    );
};

export default Profile;
