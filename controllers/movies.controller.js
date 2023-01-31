//Controllers page
const Movie = require('../models/movie.model');

module.exports.home = (req, res, next) => {
    res.render('index');
};

module.exports.movies = (req, res, next) => {
    Movie.find()
    .then((movies) => res.render('movies', { movies }))
    .catch((error) => next(error))
};

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => res.render('detail', { movie }))
    .catch((error) => next(error))
};