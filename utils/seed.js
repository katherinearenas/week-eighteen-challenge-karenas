const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let courseCheck = await connection.db.listCollections({ name: 'courses' }).toArray();
    if (courseCheck.length) {
      await connection.dropCollection('courses');
    }

    let studentsCheck = await connection.db.listCollections({ name: 'students' }).toArray();
    if (studentsCheck.length) {
      await connection.dropCollection('students');
    }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(20);

    const username = getRandonUser();

    const friends = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

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
    courseName: 'UCLA',
    inPerson: false,
    students: [...studentData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
