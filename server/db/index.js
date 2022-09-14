//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const PantryItem = require('./models/PantryItem')
const MyDrink = require('./models/MyDrink')
const Review = require('./models/Review')
const Ingredient = require('./models/Ingredient')

//associations could go here!
User.hasMany(PantryItem)
PantryItem.belongsTo(User)

User.hasMany(MyDrink)
MyDrink.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

module.exports = {
  db,
  models: {
    User,
    PantryItem,
    MyDrink,
    Review,
    Ingredient
  },
}
