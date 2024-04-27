const express = require('express');
const router = express.Router();
const {generateimage} = require('../controllers/openai_controller');

router.post('/generateimage',generateimage)

module.exports = router;