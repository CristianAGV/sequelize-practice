const db = require('../database/models')

const moviesController = {
    list: (req, res) => {
        db.movies.findAll()
            .then(results => {
                res.render('moviesList', {movies: results})
            })
            .catch(err => {
                res.send(err)
            })
    },
    detail: (req, res) => {
        db.movies.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail', {movie: movie})
            })
            .catch(err => {
                res.send(err)
            })
    },
    new: (req, res) => {
        db.movies.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies: movies})
            })
            .catch(err => {
                res.send(err)
            })
    },
    recomended: (req, res) => {
        db.movies.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte]: 7}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies', {movies: movies})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = moviesController