
const mongoose = require('mongoose');
const User = require('./models/users');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    // Clear existing users (if desired)
    await User.deleteMany({});
    // List of 10 users (add more names as required)
    const userNames = [
      'Rahul', 'Kamal', 'Sanak', 'User4', 'User5',
      'User6', 'User7', 'User8', 'User9', 'User10'
    ];
    // Create user documents with default totalPoints = 0
    const users = userNames.map((name, index) => 
  new User({
    name,
    totalPoints: 0,
    avatar: `https://i.pravatar.cc/150?img=${index + 1}`
  })
);
    await User.insertMany(users);
    console.log('Seeded users');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
