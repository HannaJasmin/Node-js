const { Model, Op } = require("sequelize");
const { isRegExp } = require("lodash");
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class Works extends Model {
    toJSON() {
      return { ...this.get() };
    }
  }
  Works.init(
    {
      _id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Workname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      Totalworks:{
        type: DataTypes.BIGINT,
        allowNull: false,
      }
      
    },
    {
      sequelize,
      timestamps: true,
      tableName:"Works",
    }
  );
   
  return Works;
};
