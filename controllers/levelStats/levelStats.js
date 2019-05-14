const LevelStats = require('../../models').LevelStats;
const Player = require('../../models').Player;
const Level = require('../../models').Level;


module.exports = {
    list(req, res) {
        return LevelStats
            .findAll({
                include:[
                    {
                        model:Player,
                        as:'player',
                        where:{ status:1 },
                        required:false
                    },{
                        model:Level,
                        as:'level',
                        where:{ status:1 },
                        required:false
                    }

                ],
                order: [
                    ['id', 'ASC']
                ],
                where: {status: 1}
            })
            .then((levelStats) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: levelStats
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
        return LevelStats
            .findOne({
                where: {
                    id: req.params.id,
                    status: 1
                },
                include:[
                    {
                        model:Player,
                        as:'player',
                        where:{ status:1 },
                        required:false
                    },{
                        model:Level,
                        as:'level',
                        where:{ status:1 },
                        required:false
                    }

                ],
            })
            .then((levelStats) => {
                if (!levelStats) {
                    return res.status(404).send({
                        status: false,
                        message: 'LevelStats Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: levelStats,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return LevelStats
            .create({
                p_id: req.body.p_id,
                lv_id: req.body.lv_id,
                total_goals: req.body.total_goals,
                turns_played: req.body.turns_played,
                projected_score: req.body.projected_score,
                avg_gpt: req.body.avg_gpt,
                target_score: req.body.target_score,
                t_gpt: req.body.t_gpt,
                status: 1
            })
            .then((levelStats) => res.status(200).send({
                status: true,
                message: "LevelStats Added Successfully",
                data: levelStats
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return LevelStats
            .update({
                p_id: req.body.p_id,
                lv_id: req.body.lv_id,
                total_goals: req.body.total_goals,
                turns_played: req.body.turns_played,
                projected_score: req.body.projected_score,
                avg_gpt: req.body.avg_gpt,
                target_score: req.body.target_score,
                t_gpt: req.body.t_gpt,
            }, {
                where: {
                    id: req.params.id, status: 1
                }
            })
            .then((levelStats) => res.status(200).send({
                status: true,
                data: levelStats,
                message: 'LevelStats Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return LevelStats
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((levelStats) => res.status(200).send({
                status: true,
                data: levelStats,
                message: 'LevelStats Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
