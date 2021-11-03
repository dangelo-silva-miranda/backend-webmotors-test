const { StatusCodes } = require('http-status-codes');

const { tbAnuncioWebmotors } = require('../models');
// const { adDataSchema } = require('./schemas');

const findAllAds = async () => {
  const ads = await tbAnuncioWebmotors.findAll();

  return { code: StatusCodes.OK, ads };
};

module.exports = {
  findAllAds,
};