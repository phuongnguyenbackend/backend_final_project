const userService = require('../services/userService');

const getProfile = async (req, res) => {
    try {
        // Default to user ID 14 as requested
        const userId = 14;
        const user = await userService.getUserProfile(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getProfile,
};
