const express = require('express');
const router = express.Router();
const Search = require('../controller/search');

router.post('/search', Search);

module.exports = router;