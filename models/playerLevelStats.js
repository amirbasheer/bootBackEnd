'use strict';

module.exports = (sequelize, DataTypes) => {
    var PlayerLevelStats = sequelize.define('PlayerLevelStats', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        p_id: DataTypes.INTEGER,
        lv_id: DataTypes.INTEGER,
        dr: DataTypes.INTEGER,
        match_up: DataTypes.INTEGER,
        projected: DataTypes.INTEGER,
        scored: DataTypes.INTEGER,
        tp: DataTypes.INTEGER,
        pr: DataTypes.INTEGER,
        plus_minus: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    PlayerLevelStats.associate = function(models) {
        PlayerLevelStats.belongsTo(models.Player, {
            foreignKey: 'p_id',
            as: 'player'
        });
        PlayerLevelStats.belongsTo(models.Level, {
            foreignKey: 'lv_id',
            as: 'level'
        });
    };
    return PlayerLevelStats;
};
