'use strict';

module.exports = (sequelize, DataTypes) => {
    var OpponentPlayer = sequelize.define('OpponentPlayer', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        opl_id: DataTypes.INTEGER,
        ign: DataTypes.STRING,
        ovr: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    OpponentPlayer.associate = function(models) {
        OpponentPlayer.belongsTo(models.Opponent, {
                    foreignKey: 'opl_id' ,
                    as: 'opponent'
                });
    };
    return OpponentPlayer;
};
