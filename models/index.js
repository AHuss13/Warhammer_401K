const User = require('./User');
const Army = require('./Army');
const Mini = require('./Mini');
const Wargear = require('./Wargear');

User.hasMany(Army, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Army.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Mini.belongsTo(Army, {
    foreignKey: 'army_id'
  });

  Wargear.belongsTo(Mini, {
    foreignKey: 'mini_id'
  });
  
  

  module.exports = { User, Army, Mini, Wargear };