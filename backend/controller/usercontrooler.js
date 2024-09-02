import User from '../model/User.js';

export const addUser = async (req, res) => {
    const { username } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ message: 'User already exists' });
        user = new User({ username });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updatePoints = async (req, res) => {
    const { username, points } = req.body;
    try {
        const user = await User.findOneAndUpdate(
            { username },
            { $inc: { points } },
            { new: true }
        );
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({ points: -1 }).limit(10);
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
