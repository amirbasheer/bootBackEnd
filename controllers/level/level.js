const Level = require('../../models').Level;
const League = require('../../models').League;
const Opponent = require('../../models').Opponent;


module.exports = {
    list(req, res) {
        return Level
            .findAll({
                include:[
                    {
                        model:League,
                        as:'league',
                        where:{ status:1 },
                        required:false
                    },
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
            .then((level) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: level
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
        return Level
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
                    },
                    {
                        model:Opponent,
                        as:'opponent',
                        where:{ status:1 },
                        required:false
                    }
                ],
            })
            .then((level) => {
                if (!level) {
                    return res.status(404).send({
                        status: false,
                        message: 'Level Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: level,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return Level
            .create({
                bcl_id: req.body.bcl_id,
                opl_id: req.body.opl_id,
                bc_score: req.body.bc_score,
                op_score: req.body.op_score,
                date: req.body.date,
                status: 1
            })
            .then((level) => res.status(200).send({
                status: true,
                message: "Level Added Successfully",
                data : level
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return Level
            .update({
                bcl_id: req.body.bcl_id,
                opl_id: req.body.opl_id,
                bc_score: req.body.bc_score,
                op_score: req.body.op_score,
                date: req.body.date,
            }, {
                where: {
                    id: req.params.id,status: 1
                }
            })
            .then((level) => res.status(200).send({
                status: true,
                data : level,
                message: 'Level Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return Level
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((level) => res.status(200).send({
                status: true,
                data : level,
                message: 'Level Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
