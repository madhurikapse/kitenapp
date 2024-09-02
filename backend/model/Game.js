import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    username: { type: String, required: true },
    deck: [String],
    gameStatus: { type: String, enum: ['playing', 'won', 'lost'], default: 'playing' }
});

const Game = mongoose.model('Game', GameSchema);
export default Game;
