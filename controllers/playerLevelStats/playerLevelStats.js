const PlayerLevelStats = require('../../models').PlayerLevelStats;
const Player = require('../../models').Player;
const Level = require('../../models').Level;


module.exports = {
    list(req, res) {
        return PlayerLevelStats
            .findAll({
                include:[
                    {
                        model:Player,
                        as:'player',
                        where:{ status:1 },
                        required:false
                    },
                    {
                        model:Level,
                        as:'level',
                        where:{ status:1 },
                        required:false
                    },
                ],
                order: [
                    ['id', 'ASC']
                ],
                where: { status: 1 }
            })
            .then((playerLevelStats) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: playerLevelStats
            }))
            .catch((error) => {
                res.status(400).send({
                    status: false,
                    message: 'Error',
                    error: error,

                });
            });
    },

    getById(req, res) {
        return PlayerLevelStats
            .findOne({
                where: {
                    id: req.params.id,
                    status:1
                },
                include:[
                    {
                        model:Player,
                        as:'player',
                        where:{ status:1 },
                        required:false
                    },
                    {
                        model:Level,
                        as:'level',
                        where:{ status:1 },
                        required:false
                    },


                ],
            })
            .then((playerLevelStats) => {
                if (!playerLevelStats) {
                    return res.status(404).send({
                        status: false,
                        message: 'PlayerLevelStats Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: playerLevelStats,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return PlayerLevelStats
            .create({
                p_id: req.body.p_id,
                lv_id: req.body.lv_id,
                dr: req.body.dr,
                match_up: req.body.match_up,
                projected: req.body.projected,
                scored: req.body.scored,
                tp: req.body.tp,
                pr: req.body.pr,
                plus_minus_pr: req.body.plus_minus_pr,
                plus_minus_sr: req.body.plus_minus_sr,
                status: 1
            })
            .then((playerLevelStats) => res.status(200).send({
                status: true,
                message: "PlayerLevelStats Added Successfully",
                data : playerLevelStats
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return PlayerLevelStats
            .update({
                p_id: req.body.p_id,
                lv_id: req.body.lv_id,
                dr: req.body.dr,
                match_up: req.body.match_up,
                projected: req.body.projected,
                scored: req.body.scored,
                tp: req.body.tp,
                pr: req.body.pr,
                plus_minus_pr: req.body.plus_minus_pr,
                plus_minus_sr: req.body.plus_minus_sr,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((playerLevelStats) => res.status(200).send({
                status: true,
                data : playerLevelStats,
                message: 'PlayerLevelStats Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return PlayerLevelStats
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((playerLevelStats) => res.status(200).send({
                status: true,
                data : playerLevelStats,
                message: 'PlayerLevelStats Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
