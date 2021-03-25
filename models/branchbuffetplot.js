"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BranchBuffetPlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      let { Branch, Buffet } = models;
      Branch.belongsToMany(Buffet, { through: "BranchBuffetPlot" });
      Buffet.belongsToMany(Branch, { through: "BranchBuffetPlot" });
    }
  }
  BranchBuffetPlot.init(
    {
      branch_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Branch, // 'Movies' would also work
          key: "id",
        },
      },
      buffet_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Buffet, // 'Movies' would also work
          key: "id",
        },
      },
      max_capacity: DataTypes.INTEGER,
      booked_slot: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      day: DataTypes.STRING,
      start_time: DataTypes.INTEGER,
      end_time: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "BranchBuffetPlot",
    }
  );
  return BranchBuffetPlot;
};
