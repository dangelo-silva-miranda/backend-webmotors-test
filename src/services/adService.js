const { StatusCodes } = require('http-status-codes');

const { TbAnuncioWebmotors } = require('../models');
// const { adDataSchema } = require('./schemas');

const createAd = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
  const { dataValues: ad } = await TbAnuncioWebmotors.create({ 
    marca, modelo, versao, ano, quilometragem, observacao, 
  });

  return { code: StatusCodes.CREATED, ad };
};

const findAllAds = async () => {
  const ads = await TbAnuncioWebmotors.findAll();

  return { code: StatusCodes.OK, ads };
};

module.exports = {
  createAd,
  findAllAds,
};