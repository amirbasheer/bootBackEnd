'use strict';

module.exports = (sequelize, DataTypes) => {
    var Level = sequelize.define('Level', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true},
        bcl_id: DataTypes.INTEGER,
        opl_id: DataTypes.INTEGER,
        bc_score: DataTypes.INTEGER,
        op_score: DataTypes.INTEGER,
        date: DataTypes.DATE,
        status: DataTypes.INTEGER,
    }, {});

    Level.associate = function (models) {
        Level.belongsTo(models.League, {
            foreignKey: 'bcl_id',
            as: 'league'
        });
        Level.belongsTo(models.Opponent, {
            foreignKey: 'opl_id',
            as: 'opponent'
        });
        Level.hasMany(models.LevelStats, {
            foreignKey: 'id',
            as: 'LevelStats'
        });
        Level.hasMany(models.PlayerLevelStats, {
            foreignKey: 'id',
            as: 'playerLevelStats'
        });
    };
    return Level;
};
