const Sequelize = require('sequelize');
const db = require('../db');

const MyDrink = db.define('myDrink', {
  drinkId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  alcoholic: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  ingredient1: {
    type: Sequelize.STRING
  },
  ingredient2: {
    type: Sequelize.STRING
  },
  ingredient3: {
    type: Sequelize.STRING
  },
  ingredient4: {
    type: Sequelize.STRING
  },
  ingredient5: {
    type: Sequelize.STRING
  },
  ingredient6: {
    type: Sequelize.STRING
  },
  ingredient7: {
    type: Sequelize.STRING
  },
  ingredient8: {
    type: Sequelize.STRING
  },
  ingredient9: {
    type: Sequelize.STRING
  },
  ingredient10: {
    type: Sequelize.STRING
  },
  ingredient11: {
    type: Sequelize.STRING
  },
  ingredient12: {
    type: Sequelize.STRING
  },
  ingredient13: {
    type: Sequelize.STRING
  },
  ingredient14: {
    type: Sequelize.STRING
  },
  ingredient15: {
    type: Sequelize.STRING
  },
  measure1: {
    type: Sequelize.STRING
  },
  measure2: {
    type: Sequelize.STRING
  },
  measure3: {
    type: Sequelize.STRING
  },
  measure4: {
    type: Sequelize.STRING
  },
  measure5: {
    type: Sequelize.STRING
  },
  measure6: {
    type: Sequelize.STRING
  },
  measure7: {
    type: Sequelize.STRING
  },
  measure8: {
    type: Sequelize.STRING
  },
  measure9: {
    type: Sequelize.STRING
  },
  measure10: {
    type: Sequelize.STRING
  },
  measure11: {
    type: Sequelize.STRING
  },
  measure12: {
    type: Sequelize.STRING
  },
  measure13: {
    type: Sequelize.STRING
  },
  measure14: {
    type: Sequelize.STRING
  },
  measure15: {
    type: Sequelize.STRING
  },
  imageURL: {
    type: Sequelize.TEXT
  },
  directions: {
    type: Sequelize.TEXT
  }
});

module.exports = MyDrink;
