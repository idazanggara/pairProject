'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Item, {through: 'Carts'})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg : 'Username cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg : 'Password cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          msg : 'Wrong email format'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          msg : 'Username cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};