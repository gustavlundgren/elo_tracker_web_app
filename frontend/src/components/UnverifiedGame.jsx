import { delete_game, verify_game } from '../api';

const UnverifiedGame = ({ game, removeRequest }) => {


    const acceptRequest = async (request) => {
        console.log('Accepted:', request);
        removeRequest(request);
        await verify_game(request.id); // Replace with actual game verification logic
    };

    const rejectRequest = async (request) => {
        console.log('Rejected:', request);
        removeRequest(request);
        await delete_game(request.id); // Replace with actual game deletion logic
    };

    return (
        <div>
            <ul>
                Players:
                <li>{game.players[0]}</li>
                <li>{game.players[1]}</li>
                Game Info:
                <li>Winner: {game.winner}</li>
                <li>Time: {game.time}</li>
            </ul>
            <button onClick={() => acceptRequest(game)}>Accept</button>
            <button onClick={() => rejectRequest(game)} id="reject-btn">Reject</button>
        </div>
    )
}

export default UnverifiedGame