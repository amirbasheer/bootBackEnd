'use strict';

module.exports = (sequelize, DataTypes) => {
    var Opponent = sequelize.define('Opponent', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        name: DataTypes.STRING,
        ovr: DataTypes.INTEGER,
        ranking: DataTypes.INTEGER,
        fame: DataTypes.INTEGER,
        players: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    Opponent.associate = function(models) {
        Opponent.hasMany(models.OpponentPlayer, {
                    foreignKey: 'opl_id' ,
                    as: 'opponentPlayers'
                });
        Opponent.hasMany(models.Level, {
                    foreignKey: 'id',
                    as: 'level'
                });
    };
    return Opponent;
};
