import React, { useEffect } from 'react';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, drawCard, startGame, updateLeaderboard } from './Actions/gameActions.js';

const App = () => {
    const dispatch = useDispatch();
    const { deck, gameStatus, user, leaderboard } = useSelector(state => state);

    useEffect(() => {
        dispatch(updateLeaderboard());
    }, [dispatch]);

    const handleStartGame = () => dispatch(startGame());
    const handleDrawCard = () => dispatch(drawCard());
    const handleAddUser = (username) => dispatch(addUser(username));

    return (
        <div>
            <h1>Exploding Kittens</h1>
            <button onClick={() => handleStartGame()}>Start Game</button>
            <button onClick={() => handleDrawCard()} disabled={gameStatus !== 'playing'}>Draw Card</button>
            <input type="text" placeholder="Username" onBlur={(e) => handleAddUser(e.target.value)} />
            <div>
                <h2>Leaderboard</h2>
                <ul>
                    {leaderboard.map((user, index) => (
                        <li key={index}>{user.username}: {user.points}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
