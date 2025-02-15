const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Server = sequelize.define('Server', {
  server_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  server_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  icon_url: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'servers',
  timestamps: false,
});

Server.belongsTo(User, { foreignKey: 'owner_id' });

module.exports = Server;
