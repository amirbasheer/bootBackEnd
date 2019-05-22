var express = require('express');
var router = express.Router();

const leagueController = require('../controllers').league;
const playerController = require('../controllers').player;
const levelStatsController = require('../controllers').levelStats;
const opponentController = require('../controllers').opponent;
const opponentPlayerController = require('../controllers').opponentPlayer;
const levelController = require('../controllers').level;
const opponentStatsController = require('../controllers').opponentStats;
const playerLevelStatsController = require('../controllers').playerLevelStats;
const opponentLevelStatsController = require('../controllers').opponentLevelStats;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BootCamp' });
});

/* League Router. */

router.post('/api/league', leagueController.add);
router.get('/api/league', leagueController.list);
router.get('/api/league/:id', leagueController.getById);
router.put('/api/league/:id', leagueController.update);
router.put('/api/leagueDelete/:id', leagueController.delete);

/* Player Router. */

router.post('/api/player', playerController.add);
router.get('/api/player', playerController.list);
router.get('/api/player/:id', playerController.getById);
router.put('/api/player/:id', playerController.update);
router.put('/api/playerDelete/:id', playerController.delete);

/* LevelStats Router. */

router.post('/api/levelStats', levelStatsController.add);
router.get('/api/levelStats', levelStatsController.list);
router.get('/api/levelStats/:id', levelStatsController.getById);
router.put('/api/levelStats/:id', levelStatsController.update);
router.put('/api/levelStatsDelete/:id', levelStatsController.delete);

/* Opponent Router. */

router.post('/api/opponent', opponentController.add);
router.get('/api/opponent', opponentController.list);
router.get('/api/opponent/:id', opponentController.getById);
router.put('/api/opponent/:id', opponentController.update);
router.put('/api/opponentDelete/:id', opponentController.delete);

/* OpponentPlayer Router. */

router.post('/api/opponentPlayer', opponentPlayerController.add);
router.get('/api/opponentPlayer', opponentPlayerController.list);
router.get('/api/opponentPlayer/:id', opponentPlayerController.getById);
router.put('/api/opponentPlayer/:id', opponentPlayerController.update);
router.put('/api/opponentPlayerDelete/:id', opponentPlayerController.delete);

/* Level Router. */

router.post('/api/level', levelController.add);
router.get('/api/level', levelController.list);
router.get('/api/level/:id', levelController.getById);
router.put('/api/level/:id', levelController.update);
router.put('/api/levelDelete/:id', levelController.delete);

/* OpponentStats Router. */

router.post('/api/opponentStats', opponentStatsController.add);
router.get('/api/opponentStats', opponentStatsController.list);
router.get('/api/opponentStats/:id', opponentStatsController.getById);
router.put('/api/opponentStats/:id', opponentStatsController.update);
router.put('/api/opponentStatsDelete/:id', opponentStatsController.delete);

/* PlayerLevelStats Router. */

router.post('/api/playerLevelStats', playerLevelStatsController.add);
router.get('/api/playerLevelStats', playerLevelStatsController.list);
router.get('/api/playerLevelStats/:id', playerLevelStatsController.getById);
router.put('/api/playerLevelStats/:id', playerLevelStatsController.update);
router.put('/api/playerLevelStatsDelete/:id', playerLevelStatsController.delete);

/* OpponentLevelStats Router. */

router.post('/api/opponentLevelStats', opponentLevelStatsController.add);
router.get('/api/opponentLevelStats', opponentLevelStatsController.list);
router.get('/api/opponentLevelStats/:id', opponentLevelStatsController.getById);
router.put('/api/opponentLevelStats/:id', opponentLevelStatsController.update);
router.put('/api/opponentLevelStatsDelete/:id', opponentLevelStatsController.delete);

//1
//
// League
//
// add=> http://192.168.100.3:3000/api/league/ (POST)
// get=> http://192.168.100.3:3000/api/league/ (GET)
// getById=> http://192.168.100.3:3000/api/league/:id (GET)
// update=> http://192.168.100.3:3000/api/league/:id (PUT)
// delete=> http://192.168.100.3:3000/api/leagueDelete/:id (PUT)
//
//2
//
// Player
//
// add=> http://192.168.100.3:3000/api/player/ (POST)
// get=> http://192.168.100.3:3000/api/player/ (GET)
// getById=> http://192.168.100.3:3000/api/player/:id (GET)
// update=> http://192.168.100.3:3000/api/player/:id (PUT)
// delete=> http://192.168.100.3:3000/api/playerDelete/:id (PUT)
//
//3
//
// LevelStats
//
// add=> http://192.168.100.3:3000/api/levelStats/ (POST)
// get=> http://192.168.100.3:3000/api/levelStats/ (GET)
// getById=> http://192.168.100.3:3000/api/levelStats/:id (GET)
// update=> http://192.168.100.3:3000/api/levelStats/:id (PUT)
// delete=> http://192.168.100.3:3000/api/levelStatsDelete/:id (PUT)
//
// 4
//
// Opponent
//
// add=> http://192.168.100.3:3000/api/opponent/ (POST)
// get=> http://192.168.100.3:3000/api/opponent/ (GET)
// getById=> http://192.168.100.3:3000/api/opponent/:id (GET)
// update=> http://192.168.100.3:3000/api/opponent/:id (PUT)
// delete=> http://192.168.100.3:3000/api/opponentDelete/:id (PUT)
//
// 5
//
// OpponentPlayer
//
// add=> http://192.168.100.3:3000/api/opponentPlayer/ (POST)
// get=> http://192.168.100.3:3000/api/opponentPlayer/ (GET)
// getById=> http://192.168.100.3:3000/api/opponentPlayer/:id (GET)
// update=> http://192.168.100.3:3000/api/opponentPlayer/:id (PUT)
// delete=> http://192.168.100.3:3000/api/opponentPlayerDelete/:id (PUT)
//
// 6
//
// Level
//
// add=> http://192.168.100.3:3000/api/level/ (POST)
// get=> http://192.168.100.3:3000/api/level/ (GET)
// getById=> http://192.168.100.3:3000/api/level/:id (GET)
// update=> http://192.168.100.3:3000/api/level/:id (PUT)
// delete=> http://192.168.100.3:3000/api/levelDelete/:id (PUT)
//
// 7
//
// OpponentStats
//
// add=> http://192.168.100.3:3000/api/opponentStats/ (POST)
// get=> http://192.168.100.3:3000/api/opponentStats/ (GET)
// getById=> http://192.168.100.3:3000/api/opponentStats/:id (GET)
// update=> http://192.168.100.3:3000/api/opponentStats/:id (PUT)
// delete=> http://192.168.100.3:3000/api/opponentStatsDelete/:id (PUT)
//
// 8
//
// PlayerLevelStats
//
// add=> http://192.168.100.3:3000/api/playerLevelStats/ (POST)
// get=> http://192.168.100.3:3000/api/playerLevelStats/ (GET)
// getById=> http://192.168.100.3:3000/api/playerLevelStats/:id (GET)
// update=> http://192.168.100.3:3000/api/playerLevelStats/:id (PUT)
// delete=> http://192.168.100.3:3000/api/playerLevelStatsDelete/:id (PUT)
//
// 9
//
// OpponentLevelStats
//
// add=> http://192.168.100.3:3000/api/playerLevelStats/ (POST)
// get=> http://192.168.100.3:3000/api/playerLevelStats/ (GET)
// getById=> http://192.168.100.3:3000/api/playerLevelStats/:id (GET)
// update=> http://192.168.100.3:3000/api/playerLevelStats/:id (PUT)
// delete=> http://192.168.100.3:3000/api/playerLevelStatsDelete/:id (PUT)
//

module.exports = router;
