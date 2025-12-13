const express = require('express');
const router = express.Router();
const upgradeController = require('../controllers/upgradeController');

router.post('/', upgradeController.requestUpgrade);
router.get('/', upgradeController.getRequests);

module.exports = router;
