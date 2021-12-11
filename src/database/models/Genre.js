


module.exports = (sequelize, DataTypes) => {
    const alias = 'genres'
    const columns = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING(100),
        ranking: DataTypes.INTEGER,

    }
    const config = {
        tableName: 'genres',
        timestamps: false
    }

    const Genre = sequelize.define(alias, columns, config)
    return Genre
}