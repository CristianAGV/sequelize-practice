

module.exports = (sequelize, DataTypes) => {
    const alias = "movies"
    const columns = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING(500),
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER
    }
    const config = {
        tableName: 'movies',
        timestamps: false
    }
    const Movie = sequelize.define(alias, columns, config)

    return Movie
}