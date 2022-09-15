'use strict'

const {db, models: {User, PantryItem, MyDrink, Review, Ingredient} } = require('../server/db');
const seedUsers = require('./seedUsers.json');
const seedPantryItems = require('./seedPantryItems.json');
const seedMyDrinks = require('./seedMyDrinks.json');
const seedReviews = require('./seedReviews.json');
const seedIngredients = require('./seedIngredients.json');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  await Promise.all(seedUsers.map(user => User.create(user)));
  await Promise.all(seedIngredients.map(ingredient => Ingredient.create(ingredient)));
  await Promise.all(seedPantryItems.map(pantryItem => PantryItem.create(pantryItem)));
  await Promise.all(seedMyDrinks.map(myDrink => MyDrink.create(myDrink)));
  await Promise.all(seedReviews.map(review => Review.create(review)));

}
  //Creating Users
//   const users = await Promise.all([
//     User.create({ username: 'cody', password: '123', firstName: 'cody', lastName: 'ydoc', email: 'cody@cody.com' }),
//     User.create({ username: 'murphy', password: '123', firstName: 'murphy', lastName: 'yhprum', email: 'murphy@murphy.com' }),
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
//   return {
//     users: {
//       cody: users[0],
//       murphy: users[1]
//     }
//   }
// }

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
