const express = require('express');
const adController = require('../controllers/adController');

const adRouter = express.Router();

adRouter.post('/', adController.createAd);

adRouter.get('/', adController.findAllAds);

adRouter.get('/:id', adController.findAdByPk);

module.exports = {
  adRouter,
};