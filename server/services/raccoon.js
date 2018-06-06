const raccoon = require('raccoon');

// / these are the default values but you can change them
raccoon.config.nearestNeighbors = 5; // number of neighbors you want to compare a user against
raccoon.config.className = 'hobby'; // prefix for your items (used for redis)
raccoon.config.numOfRecsStore = 30; // number of recommendations to store per user

module.exports = raccoon;

// const mocks = {
//   users: [
//     { name: 'Jim' },
//     { name: 'David' },
//     { name: 'Sara' },
//     { name: 'Ana' },
//   ],
//   hobbies: [
//     { name: 'Rubik' },
//     { name: 'Butterfly catching' },
//     { name: 'Pick-locking' },
//     { name: 'Polishing aluminium balls' },
//   ],
// };
//
// raccoon.liked('jim', 'rubik')
//   .then(() => raccoon.liked('jim', 'butterflies'))
//   .then(() => raccoon.liked('louis', 'rubik'))
//   .then(() => raccoon.recommendFor('louis', 10))
//   .then(recs => console.log(recs));
//
//
// raccoon.liked('jhon', 'rubik')
//   .then(() => raccoon.recommendFor('jhon', 10))
//   .then(recs => console.log(recs));