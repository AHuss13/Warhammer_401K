const User = require('./User');
const Army = require('./Army');
const Model = require('./Model');
const Wargear = require('./Wargear');

User.hasMany(Army, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Army.belongsToMany(User, {
    foreignKey: 'user_id'
  });

  Model.belongsTo(Army, {
    foreignKey: 'army_id'
  });

  Wargear.belongsToMany(Model, {
    foreignKey: 'model_id'
  });
  
  

  module.exports = { User, Army, Project, Wargear };