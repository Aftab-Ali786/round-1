const User = require('../models/users');
const ClaimHistory = require('../models/claimHistory');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new user 
exports.addUser = async (req, res) => {
  try {
    const { name, avatar } = req.body;

    if (!name || !avatar) {
      return res.status(400).json({ error: 'Name and avatar URL are required.' });
    }

    const newUser = new User({ name, avatar }); // ✅ use the variable correctly
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Claim points: award random points between 1 and 10
exports.claimPoints = async (req, res) => {
  try {
    const userId = req.params.id;
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    // Find user and update the total points
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.totalPoints += randomPoints;
    await user.save();

    // Create a claim history record
    const history = new ClaimHistory({
      userId,
      pointsClaimed: randomPoints
    });
    await history.save();

    res.json({ user, pointsClaimed: randomPoints });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Leaderboard: sort all users by totalPoints in descending order
exports.getLeaderboard = async (req, res) => {
  try {
    
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

