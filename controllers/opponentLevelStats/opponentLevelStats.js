const OpponentLevelStats = require('../../models').OpponentLevelStats;
// const Opponent = require('../../models').Opponent;
const Player = require('../../models').Player;


module.exports = {
    list(req, res) {
        return OpponentLevelStats
            .findAll({
                include: [
                    {
                        model: Player,
                        as: 'player',
                        where: {status: 1},
                        required: false
                    },
                    // {
                    //     model: Opponent,
                    //     as: 'opponent',
                    //     where: {status: 1},
                    //     required: false
                    // },
                ],
                order: [
                    ['id', 'ASC']
                ],
                where: {status: 1}
            })
            .then((opponentLevelStats) => res.status(200).send({
                status: true,
                message: 'Data Fetched',
                data: opponentLevelStats
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
        return OpponentLevelStats
            .findOne({
                where: {
                    id: req.params.id,
                    status: 1
                },
                include: [
                    {
                        model: Player,
                        as: 'player',
                        where: {status: 1},
                        required: false
                    },
                    // {
                    //     model: Opponent,
                    //     as: 'opponent',
                    //     where: {status: 1},
                    //     required: false
                    // },
                ],
            })
            .then((opponentLevelStats) => {
                if (!opponentLevelStats) {
                    return res.status(404).send({
                        status: false,
                        message: 'OpponentLevelStats Not Found'
                    });
                }
                return res.status(200).send({
                    status: true,
                    message: "Data Fetched",
                    data: opponentLevelStats,
                });
            })
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    add(req, res) {
        return OpponentLevelStats
            .create({
                opp_id: req.body.opp_id,
                p_id: req.body.p_id,
                dr: req.body.dr,
                match_up: req.body.match_up,
                projected_sr: req.body.projected_sr,
                scored: req.body.scored,
                tp: req.body.tp,
                opp_ovr: req.body.opp_ovr,
                projected_pr: req.body.projected_pr,
                plus_minus_pr: req.body.plus_minus_pr,
                plus_minus_sr: req.body.plus_minus_sr,
                player_ovr: req.body.player_ovr,
                sr: req.body.sr,
                opp_dr: req.body.opp_dr,
                opp_name: req.body.opp_name,
                status: 1
            })
            .then((opponentLevelStats) => res.status(200).send({
                status: true,
                message: "OpponentLevelStats Added Successfully",
                data: opponentLevelStats
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    update(req, res) {
        return OpponentLevelStats
            .update({
                opp_id: req.body.opp_id,
                p_id: req.body.p_id,
                dr: req.body.dr,
                match_up: req.body.match_up,
                projected_sr: req.body.projected_sr,
                scored: req.body.scored,
                tp: req.body.tp,
                opp_ovr: req.body.opp_ovr,
                projected_pr: req.body.projected_pr,
                plus_minus_pr: req.body.plus_minus_pr,
                plus_minus_sr: req.body.plus_minus_sr,
                player_ovr: req.body.player_ovr,
                opp_dr: req.body.opp_dr,
                opp_name: req.body.opp_name,
                sr: req.body.sr,
            }, {
                where: {
                    id: req.params.id, status: 1
                }
            })
            .then((opponentLevelStats) => res.status(200).send({
                status: true,
                data: opponentLevelStats,
                message: 'OpponentLevelStats Updated Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    },
    delete(req, res) {
        return OpponentLevelStats
            .update({
                status: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((opponentLevelStats) => res.status(200).send({
                status: true,
                data: opponentLevelStats,
                message: 'OpponentLevelStats Deleted Successfully'
            }))
            .catch((error) => res.status(400).send({
                status: false,
                message: 'Error',
                error: error
            }));
    }
};
