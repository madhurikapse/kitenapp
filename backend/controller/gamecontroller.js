import Game from '../model/Game.js';
import { shuffleDeck } from '../utils.js';


export const createGame = async (req, res) => {
    const { username } = req.body;
    if (!username || typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({ message: 'Valid username is required' });
    }

    try {
        const deck = shuffleDeck(['😼', '🙅‍♂️', '🔀', '💣', '😼']);
        const game = new Game({ username, deck });
        await game.save();
        res.json({ deck: game.deck });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const drawCard = async (req, res) => {
    const { username } = req.body;
    try {
        const game = await Game.findOne({ username });
        if (!game) return res.status(404).json({ message: 'Game not found' });

        if (game.deck.length === 0) return res.status(400).json({ message: 'No cards left in the deck' });

        const drawnCard = game.deck.pop();
        let gameStatus = game.gameStatus;

        if (drawnCard === '💣') {
            gameStatus = 'lost';
        } else if (drawnCard === '🔀') {
            const newDeck = shuffleDeck(['😼', '🙅‍♂️', '🔀', '💣', '😼']);
            game.deck = newDeck;
            gameStatus = 'playing';
        }

        game.gameStatus = gameStatus;
        await game.save();

        res.json({ drawnCard, deck: game.deck, gameStatus });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const saveCards = async (req, res) => {
    const { username, deck, gameStatus } = req.body;
    try {
        const game = await Game.findOneAndUpdate(
            { username },
            { deck, gameStatus },
            { new: true }
        );
        res.json(game);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
