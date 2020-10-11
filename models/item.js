

// const { DataTypes } = require("sequelize/types");
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Item extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Item.init({
//     title: DataTypes.STRING,
//     link: DataTypes.STRING,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Item',
//   });
//   return Item;
// };

const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      refernces: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  }, {});
  Item.associate = function (models) {
    Item.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }
  return Item;
};