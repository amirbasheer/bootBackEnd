'use strict';

module.exports = (sequelize, DataTypes) => {
    var OpponentLevelStats = sequelize.define('OpponentLevelStats', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        p_id: DataTypes.INTEGER,
        dr: DataTypes.INTEGER,
        match_up: DataTypes.INTEGER,
        projected_sr: DataTypes.INTEGER,
        scored: DataTypes.INTEGER,
        tp: DataTypes.INTEGER,
        opp_ovr: DataTypes.INTEGER,
        plus_minus_pr: DataTypes.INTEGER,
        plus_minus_sr: DataTypes.INTEGER,
        projected_pr: DataTypes.INTEGER,
        sr: DataTypes.STRING,
        player_ovr: DataTypes.INTEGER,
        opp_dr: DataTypes.INTEGER,
        opp_name: DataTypes.STRING,
        status: DataTypes.INTEGER,
    }, {});

    OpponentLevelStats.associate = function(models) {
        OpponentLevelStats.belongsTo(models.Opponent, {
            foreignKey: 'opp_id',
            as: 'opponent'
        });
        // OpponentLevelStats.belongsTo(models.Player, {
        //     foreignKey: 'p_id',
        //     as: 'player'
        // });
    };
    return OpponentLevelStats;
};

