'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tb_AnuncioWebmotors',
      [{
        id: 1,
        marca:'Honda',
        modelo:"Fit",
        versao:"1.4 LXL 16V FLEX 4P AUTOMÁTICO",
        ano:2018,
        quilometragem:0,
        observacao:'Preto'
      },
      {
        id: 2,
        marca:'Mitsubishi',
        modelo:'Lancer',
        versao:"2.0 EVO 4P AUTOMÁTICO",
        ano:2012,
        quilometragem:0,
        observacao:'Branco'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('tb_AnuncioWebmotors', null, {});
  }
};
