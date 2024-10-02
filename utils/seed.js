const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(20);
    const friends = getRandomUser(5);
    const username = getRandomUser();
    const email = `${username}@email.com`;
    

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add students to the collection and await the results
  const userData = await User.create(users);

  // Add courses to the collection and await the results
  await Thought.create({
    thoughtText: '',
    createdAt: false,
    username: [...userData.map(({_id}) => _id)],
    reactions: []
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
