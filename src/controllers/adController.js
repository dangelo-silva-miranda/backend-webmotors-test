const adService = require('../services/adService');

const findAllAds = async (_req, res) => {
  const { code, ads } = await adService.findAllAds();

  return res.status(code).json(ads);
};

module.exports = {
  findAllAds,
};