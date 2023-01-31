//Routes page
const express = require('express');

const router = express.Router();
const movies = require('../controllers/movies.controller');

router.get('/', movies.home);
router.get('/movies', movies.movies);
router.get('/movies/:id', movies.detail);

module.exports = router;