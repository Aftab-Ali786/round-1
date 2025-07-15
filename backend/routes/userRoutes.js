const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getLeaderboard
} = require('../controllers/userControllers');

router.get('/', getUsers);         // Get all users
router.post('/', addUser);           // Add new user
router.post('/claim/:id', claimPoints); // Claim points for user with :id
router.get('/leaderboard', getLeaderboard); // Get sorted leaderboard

module.exports = router;
