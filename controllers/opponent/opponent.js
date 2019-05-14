const Opponent = require('../../models').Opponent;
const OpponentPlayer = require('../../models').OpponentPlayer;


module.exports = {
    list(req, res) {
        return Opponent
            .findAll({
                include:[
                    {
                        model:OpponentPlayer,
                        as:'opponentPlayers',
                        where:{ status:1 },
                        required:false
                    }

                ],
                order: [
                    ['id', 'ASC']
                ],
                where: { status: 1 }
            })
            .then((opponent) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: opponent
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
        return Opponent
            .findOne({
                where: {
                    id: req.params.id,
                    status:1
                },
                include:[
                    {
                        model:OpponentPlayer,
                        as:'opponentPlayers',
                        where:{ status:1 },
                        required:false
                    }

                ],
            })
            .then((opponent) => {
                if (!opponent) {
                    return res.status(404).send({
                        status: false,
                        message: 'Opponent Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: opponent,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return Opponent
            .create({
                name: req.body.name,
                ovr: req.body.ovr,
                ranking: req.body.ranking,
                fame: req.body.fame,
                players: req.body.players,
                status: 1
            })
            .then((opponent) => res.status(200).send({
                status: true,
                message: "Opponent Added Successfully",
                data : opponent
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return Opponent
            .update({
                name: req.body.name,
                ovr: req.body.ovr,
                ranking: req.body.ranking,
                fame: req.body.fame,
                players: req.body.players,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((opponent) => res.status(200).send({
                status: true,
                data : opponent,
                message: 'Opponent Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return Opponent
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((opponent) => res.status(200).send({
                status: true,
                data : opponent,
                message: 'Opponent Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
