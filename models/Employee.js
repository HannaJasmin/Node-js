const { Model, Op } = require("sequelize");
const { isRegExp } = require("lodash");
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    toJSON() {
      return { ...this.get() };
    }
  }
  Employees.init(
    {
      _id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Employeename:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      DOB:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      joindate:{
        type: DataTypes.DATE,
        allowNull: true,
      },
      workcapacity:{
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      phonenumber:{
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      departmentId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Departments', // Table name
          key: '_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
    },
        
    {
      sequelize,
      timestamps: true,
      tableName: "Employees",
    }
  );
  Employees.associate = (models) => {
  Employees.belongsTo(models.Departments, { foreignKey: 'departmentId' });
  };

  return Employees;
};
