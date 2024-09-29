const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughtText = [
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'Curabitur efficitur justo et nulla posuere, quis fringilla metus blandit.',
'Praesent a lectus sed urna porttitor interdum.',
'Proin accumsan neque ac tempus congue.',
'Ut malesuada eros in purus convallis, sed placerat neque laoreet.',
'Etiam lacinia felis vehicula arcu sodales, ut gravida enim egestas.',
'In quis metus ac sem convallis ultrices.',
'Etiam cursus eros efficitur mauris vehicula venenatis.',
'Sed placerat quam ac consequat suscipit.',
'Praesent eu ex condimentum, egestas neque eget, vehicula nulla.',
'Phasellus rutrum massa ac lectus luctus, eget consectetur lectus ultricies.',
'Curabitur molestie odio tincidunt pharetra scelerisque.',
'Fusce tempor ligula ut arcu tristique volutpat.',
'Pellentesque porta tortor id risus consequat, facilisis volutpat velit condimentum.',
'Aenean commodo augue in velit imperdiet eleifend.',
'Nulla cursus metus et tincidunt porta.',
'Cras pretium libero et mollis pretium.',
'Integer tempus arcu sit amet rutrum malesuada.',
'Maecenas facilisis arcu in felis elementum, eget porttitor velit semper.',
'Duis quis velit id velit efficitur vehicula.',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUser = () =>
  `${getRandomArrItem(usernames)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtText),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts };
