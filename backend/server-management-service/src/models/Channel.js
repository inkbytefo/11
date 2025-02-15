const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Server = require('./Server');

const Channel = sequelize.define('Channel', {
  channel_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  server_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Server,
      key: 'server_id',
    },
  },
  channel_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  channel_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  topic: {
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
  tableName: 'channels',
  timestamps: false,
});

Channel.belongsTo(Server, { foreignKey: 'server_id' });

module.exports = Channel;
