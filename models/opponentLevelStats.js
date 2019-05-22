'use strict';

module.exports = (sequelize, DataTypes) => {
    var OpponentLevelStats = sequelize.define('OpponentLevelStats', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        opp_id: DataTypes.INTEGER,
        p_id: DataTypes.INTEGER,
        dr: DataTypes.INTEGER,
        match_up: DataTypes.INTEGER,
        projected: DataTypes.INTEGER,
        scored: DataTypes.INTEGER,
        tp: DataTypes.INTEGER,
        pr: DataTypes.INTEGER,
        plus_minus_pr: DataTypes.INTEGER,
        plus_minus_sr: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    OpponentLevelStats.associate = function(models) {
        OpponentLevelStats.belongsTo(models.Opponent, {
            foreignKey: 'opp_id',
            as: 'opponent'
        });
        OpponentLevelStats.belongsTo(models.Player, {
            foreignKey: 'p_id',
            as: 'player'
        });
    };
    return OpponentLevelStats;
};

