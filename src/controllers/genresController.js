const db = require('../database/models')

const genreController = {
    list: (req, res) => {
        db.genres.findAll()
            .then(genres => {
                res.render('genresList', {genres: genres})
            })
            .catch(err => {
                res.send(err)
            })
    },
    detail: (req, res) => {
        db.genres.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail', {genre: genre})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = genreController