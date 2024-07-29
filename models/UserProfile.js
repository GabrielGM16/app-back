// backend/models/UserProfile.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserProfile = sequelize.define('UserProfile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  zodiacSign: {
    type: DataTypes.STRING,
    allowNull: false
  },
  personalityType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  relevantValues: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

module.exports = UserProfile;
