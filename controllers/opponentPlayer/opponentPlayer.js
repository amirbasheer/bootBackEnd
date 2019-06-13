const OpponentPlayer = require('../../models').OpponentPlayer;
const Opponent = require('../../models').Opponent;


module.exports = {
    list(req, res) {
        return OpponentPlayer
            .findAll({
                include:[
                    {
                        model:Opponent,
                        as:'opponent',
                        where:{ status:1 },
                        required:false
                    }

                ],
                order: [
                    ['id', 'ASC']
                ],
                where: { status: 1 }
            })
            .then((opponentPlayer) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: opponentPlayer
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
        return OpponentPlayer
            .findOne({
                where: {
                    id: req.params.id,
                    status:1
                },
                include:[
                    {
                        model:Opponent,
                        as:'opponent',
                        where:{ status:1 },
                        required:false
                    }

                ],
            })
            .then((opponentPlayer) => {
                if (!opponentPlayer) {
                    return res.status(404).send({
                        status: false,
                        message: 'OpponentPlayer Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: opponentPlayer,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return OpponentPlayer
            .create({
                opl_id: req.body.opl_id,
                ign: req.body.ign,
                ovr: req.body.ovr,
                status: 1
            })
            .then((opponentPlayer) => res.status(200).send({
                status: true,
                message: "OpponentPlayer Added Successfully",
                data : opponentPlayer
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return OpponentPlayer
            .update({
                opl_id: req.body.opl_id,
                ign: req.body.ign,
                ovr: req.body.ovr,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((opponentPlayer) => res.status(200).send({
                status: true,
                data : opponentPlayer,
                message: 'OpponentPlayer Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return OpponentPlayer
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((opponentPlayer) => res.status(200).send({
                status: true,
                data : opponentPlayer,
                message: 'OpponentPlayer Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
