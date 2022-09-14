const Sequelize = require('sequelize');
const db = require('../db');

const PantryItem = db.define('pantryItem', {
  brand: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  stock: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

module.exports = PantryItem;
