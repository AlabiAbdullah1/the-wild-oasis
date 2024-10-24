'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserResponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserResponse.init({
    id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    quiz_id: DataTypes.UUID,
    question_id: DataTypes.UUID,
    selected_answer_id: DataTypes.UUID,
    is_correct: DataTypes.BOOLEAN,
    answered_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserResponse',
  });
  return UserResponse;
};