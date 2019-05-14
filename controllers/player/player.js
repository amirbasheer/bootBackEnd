const Player = require('../../models').Player;
const League = require('../../models').League;


module.exports = {
    list(req, res) {
        return Player
            .findAll({
                include:[
                    {
                        model:League,
                        as:'league',
                        where:{ status:1 },
                        required:false
                    }

                ],
                order: [
                    ['id', 'ASC']
                ],
                where: { status: 1 }
            })
            .then((player) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: player
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
        return Player
            .findOne({
                where: {
                    id: req.params.id,
                    status:1
                },
                include:[
                    {
                        model:League,
                        as:'league',
                        where:{ status:1 },
                        required:false
                    }

                ],
            })
            .then((player) => {
                if (!player) {
                    return res.status(404).send({
                        status: false,
                        message: 'Player Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: player,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return Player
            .create({
                name: req.body.name,
                ign: req.body.ign,
                discord: req.body.discord,
                level_played: req.body.level_played,
                league_role: req.body.league_role,
                sr: req.body.sr,
                ovr: req.body.ovr,
                league_id: req.body.league_id,
                status: 1
            })
            .then((player) => res.status(200).send({
                status: true,
                message: "Player Added Successfully",
                data : player
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return Player
            .update({
                name: req.body.name,
                ign: req.body.ign,
                discord: req.body.discord,
                level_played: req.body.level_played,
                league_role: req.body.league_role,
                sr: req.body.sr,
                ovr: req.body.ovr,
                league_id: req.body.league_id,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((player) => res.status(200).send({
                status: true,
                data : player,
                message: 'Player Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return Player
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((player) => res.status(200).send({
                status: true,
                data : player,
                message: 'Player Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
