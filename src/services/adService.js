const { StatusCodes } = require('http-status-codes');

const { TbAnuncioWebmotors } = require('../models');
const { adDataSchema } = require('./schemas');

const adIdExists = async (id) => {
  // Verifica se id existe no banco de dados
  const idDB = await TbAnuncioWebmotors.findOne({ 
    attributes: ['id'], where: { id } });
  
  return idDB !== null;
};

const createAd = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
  const { error } = adDataSchema.validate({ 
    marca, modelo, versao, ano, quilometragem, observacao });
  if (error) { // error.isJoi indentifica se o erro foi do tipo Joi
    const { message } = error.details[0];    
    return { code: StatusCodes.BAD_REQUEST, message };
  }

  const { dataValues: ad } = await TbAnuncioWebmotors.create({ 
    marca, modelo, versao, ano, quilometragem, observacao, 
  });

  return { code: StatusCodes.CREATED, ad };
};

const findAllAds = async () => {
  const ads = await TbAnuncioWebmotors.findAll();

  return { code: StatusCodes.OK, ads };
};

const findAdByPk = async ({ id }) => {
  const ad = await TbAnuncioWebmotors.findByPk(id);

  if (!ad) { 
    return { code: StatusCodes.NOT_FOUND, message: 'Ad does not exist' }; 
  }

  return { code: StatusCodes.OK, ad };
};

/*
  Material consultado sobre método update e o seu retorno
  https://newbedev.com/sequelize-update-record-and-return-result
*/
const updateAdByPk = async ({ id, marca, modelo, versao, ano, 
  quilometragem, observacao }) => {
  const idExists = await adIdExists(id);
  if (!idExists) {
    return { code: StatusCodes.NOT_FOUND, message: 'Ad does not exist' }; 
  }

  const rowsUpdate = await TbAnuncioWebmotors.update(
    { marca, modelo, versao, ano, quilometragem, observacao }, 
    { where: { id } },
  );

  if (!rowsUpdate) {
    return { code: StatusCodes.NOT_MODIFIED, message: 'Ad does not updated' }; 
  }

  const ad = await TbAnuncioWebmotors.findByPk(id);
  
  return { code: StatusCodes.OK, ad };
};

module.exports = {
  createAd,
  findAllAds,
  findAdByPk,
  updateAdByPk,
};