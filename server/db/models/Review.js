const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  drinkId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Review;
