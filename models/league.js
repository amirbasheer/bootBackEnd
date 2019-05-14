'use strict';

module.exports = (sequelize, DataTypes) => {
    var League = sequelize.define('League', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        name: DataTypes.STRING,
        ranking: DataTypes.INTEGER,
        fame: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    League.associate = function(models) {
        League.hasMany(models.Player, {
                foreignKey: 'league_id' ,
                as: 'players'
            });
        League.hasMany(models.Level, {
                foreignKey: 'id' ,
                as: 'levels'
            });
    };
    return League;
};
