"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "e7fe25d3-8c89-4cbb-bc51-94e24343f0ae", // example UUID
          username: "john_doe",
          email: "john@example.com",
          password: "hashed_password_here", // make sure to hash the password
          profile_picture: "https://example.com/john.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f8fbb1d3-4c7b-4fca-bc22-10a24364f3be", // example UUID
          username: "jane_doe",
          email: "jane@example.com",
          password: "hashed_password_here",
          profile_picture: "https://example.com/jane.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
