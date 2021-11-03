const { StatusCodes } = require('http-status-codes');

const { TbAnuncioWebmotors } = require('../models');
// const { adDataSchema } = require('./schemas');

const findAllAds = async () => {
  const ads = await TbAnuncioWebmotors.findAll();

  return { code: StatusCodes.OK, ads };
};

module.exports = {
  findAllAds,
};