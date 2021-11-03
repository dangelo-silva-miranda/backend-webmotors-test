const adService = require('../services/adService');

const createAd = async (req, res) => {
  const { code, message, ad } = await adService.createAd(req.body);

  if (!ad) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(ad);
};

const findAllAds = async (_req, res) => {
  const { code, ads } = await adService.findAllAds();

  return res.status(code).json(ads);
};

const findAdByPk = async (req, res) => {
  const { code, message, ad } = await adService.findAdByPk(req.params);

  if (!ad) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(ad);
};

const updateAdByPk = async (req, res) => {
  const { params: { id }, body: { marca, modelo, versao, ano, 
    quilometragem, observacao } } = req;
  const { code, message, ad } = await adService.updateAdByPk({ 
    id, marca, modelo, versao, ano, quilometragem, observacao, 
  });

  if (!ad) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(ad);
};

module.exports = {
  createAd,
  findAllAds,
  findAdByPk,
  updateAdByPk,
};