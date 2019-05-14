const League = require('../../models').League;
const Player = require('../../models').Player;


module.exports = {
    list(req, res) {
        return League
            .findAll({
                include:[
                    {
                        model:Player,
                        as:'players',
                        where:{ status:1 },
                        required: false
                    }

                ],
                order: [
                    ['id', 'ASC']
                ],
                where: { status: 1 }
            })
            .then((league) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: league
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
        return League
            .findOne({
                where: {
                    id: req.params.id,
                    status:1
                },
                include:[
                    {
                        model:Player,
                        as:'players',
                        where:{ status:1 },
                        required: false
                    }

                ],
            })
            .then((league) => {
                if (!league) {
                    return res.status(404).send({
                        status: false,
                        message: 'League Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: league,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return League
            .create({
                name: req.body.name,
                ranking: req.body.ranking,
                fame: req.body.fame,
                status: 1
            })
            .then((league) => res.status(200).send({
                status: true,
                message: "League Added Successfully",
                data : league
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return League
            .update({
                name: req.body.name,
                ranking: req.body.ranking,
                fame: req.body.fame,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((league) => res.status(200).send({
                status: true,
                data : league,
                message: 'League Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return League
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((league) => res.status(200).send({
                status: true,
                data : league,
                message: 'League Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
