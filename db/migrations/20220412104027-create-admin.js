module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      approved: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Admins');
  },
};
