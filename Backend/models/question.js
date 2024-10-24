'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    id: DataTypes.UUID,
    quiz_id: DataTypes.UUID,
    text: DataTypes.TEXT,
    question_type: DataTypes.ENUM,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};