'use strict';

module.exports = (sequelize, DataTypes) => {
    var LevelStats = sequelize.define('LevelStats', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true},
        p_id: DataTypes.INTEGER,
        lv_id: DataTypes.INTEGER,
        total_goals: DataTypes.INTEGER,
        turns_played: DataTypes.INTEGER,
        projected_score: DataTypes.INTEGER,
        avg_gpt: DataTypes.INTEGER,
        target_score: DataTypes.INTEGER,
        t_gpt: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    LevelStats.associate = function (models) {
        LevelStats.belongsTo(models.Player, {
            foreignKey: 'p_id',
            as: 'player'
        });
        LevelStats.belongsTo(models.Level, {
            foreignKey: 'lv_id',
            as: 'level'
        });
    };
    return LevelStats;
};
