const express = require('express');
const router = express.Router();
const createRide  = require('../controller/create.js');

router.post('/create', createRide);

module.exports = router;
