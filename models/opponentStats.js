'use strict';

module.exports = (sequelize, DataTypes) => {
    var OpponentStats = sequelize.define('OpponentStats', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
        tg: DataTypes.INTEGER,
        tp: DataTypes.INTEGER,
        agpt: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {});

    OpponentStats.associate = function(models) {
        //     League.belongsTo(models.Player, {
        //             foreignKey: 'league_id' ,
        //             as: 'player'
        //         });
    };
    return OpponentStats;
};
