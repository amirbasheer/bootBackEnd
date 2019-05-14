'use strict';

module.exports = (sequelize, DataTypes) => {
    var Player = sequelize.define('Player', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        name: DataTypes.STRING,
        ign: DataTypes.STRING,
        discord: DataTypes.STRING,
        level_played: DataTypes.STRING,
        league_role: DataTypes.STRING,
        sr: DataTypes.STRING,
        ovr: DataTypes.INTEGER,
        league_id: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    Player.associate = function(models) {
            Player.belongsTo(models.League, {
                foreignKey: 'league_id' ,
                as: 'league'
            });
            Player.hasMany(models.LevelStats, {
                foreignKey: 'id' ,
                as: 'levelStats'
            });
            Player.hasMany(models.PlayerLevelStats, {
                foreignKey: 'id' ,
                as: 'playerLevelStats'
            });
    };
    return Player;
};
