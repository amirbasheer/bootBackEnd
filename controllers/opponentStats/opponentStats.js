const OpponentStats = require('../../models').OpponentStats;


module.exports = {
    list(req, res) {
        return OpponentStats
            .findAll({
                // include:[
                //     {
                //         model:League,
                //         as:'league',
                //         where:{ status:1 }
                //     }
                //
                // ],
                order: [
                    ['id', 'ASC']
                ],
                where: { status: 1 }
            })
            .then((opponentStats) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: opponentStats
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
        return OpponentStats
            .findOne({
                where: {
                    id: req.params.id,
                    status:1
                }
            })
            .then((opponentStats) => {
                if (!opponentStats) {
                    return res.status(404).send({
                        status: false,
                        message: 'LevelStats Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: opponentStats,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return OpponentStats
            .create({
                tg: req.body.tg,    
                tp: req.body.tp,
                agpt: req.body.agpt,
                status: 1
            })
            .then((opponentStats) => res.status(200).send({
                status: true,
                message: "OpponentStats Added Successfully",
                data : opponentStats
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return OpponentStats
            .update({
                tg: req.body.tg,
                tp: req.body.tp,
                agpt: req.body.agpt,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((opponentStats) => res.status(200).send({
                status: true,
                data : opponentStats,
                message: 'OpponentStats Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return OpponentStats
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((opponentStats) => res.status(200).send({
                status: true,
                data : opponentStats,
                message: 'OpponentStats Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
