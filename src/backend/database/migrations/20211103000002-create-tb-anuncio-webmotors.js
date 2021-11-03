module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_AnuncioWebmotors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      versao: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quilometragem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_AnuncioWebmotors');
  }
};