const ratingService = require('../services/ratingService');

const getRatings = async (req, res) => {
    try {
        const { product_id } = req.query;
        if (!product_id) {
            return res.status(400).json({ message: 'product_id is required' });
        }
        const ratings = await ratingService.getRatingsByProductId(product_id);
        res.status(200).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getRatings,
};
