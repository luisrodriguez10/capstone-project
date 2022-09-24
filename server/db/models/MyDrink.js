const Sequelize = require('sequelize');
const db = require('../db');

const MyDrink = db.define('myDrink', {
  strDrink: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  strAlcoholic: {
    type: Sequelize.STRING
  },
  strAlcoholic2: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  strIngredient1: {
    type: Sequelize.STRING
  },
  strIngredient2: {
    type: Sequelize.STRING
  },
  strIngredient3: {
    type: Sequelize.STRING
  },
  strIngredient4: {
    type: Sequelize.STRING
  },
  strIngredient5: {
    type: Sequelize.STRING
  },
  strIngredient6: {
    type: Sequelize.STRING
  },
  strIngredient7: {
    type: Sequelize.STRING
  },
  strIngredient8: {
    type: Sequelize.STRING
  },
  strIngredient9: {
    type: Sequelize.STRING
  },
  strIngredient10: {
    type: Sequelize.STRING
  },
  strIngredient11: {
    type: Sequelize.STRING
  },
  strIngredient12: {
    type: Sequelize.STRING
  },
  strIngredient13: {
    type: Sequelize.STRING
  },
  strIngredient14: {
    type: Sequelize.STRING
  },
  strIngredient15: {
    type: Sequelize.STRING
  },
  strMeasure1: {
    type: Sequelize.STRING
  },
  strMeasure2: {
    type: Sequelize.STRING
  },
  strMeasure3: {
    type: Sequelize.STRING
  },
  strMeasure4: {
    type: Sequelize.STRING
  },
  strMeasure5: {
    type: Sequelize.STRING
  },
  strMeasure6: {
    type: Sequelize.STRING
  },
  strMeasure7: {
    type: Sequelize.STRING
  },
  strMeasure8: {
    type: Sequelize.STRING
  },
  strMeasure9: {
    type: Sequelize.STRING
  },
  strMeasure10: {
    type: Sequelize.STRING
  },
  strMeasure11: {
    type: Sequelize.STRING
  },
  strMeasure12: {
    type: Sequelize.STRING
  },
  strMeasure13: {
    type: Sequelize.STRING
  },
  strMeasure14: {
    type: Sequelize.STRING
  },
  strMeasure15: {
    type: Sequelize.STRING
  },
  strDrinkThumb: {
    type: Sequelize.TEXT
  },
  strInstructions: {
    type: Sequelize.TEXT
  }
});

module.exports = MyDrink;
