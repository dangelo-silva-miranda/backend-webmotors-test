const express = require('express');
const adController = require('../controllers/adController');

const adRouter = express.Router();

adRouter.get('/', adController.findAllAds);

module.exports = {
  adRouter,
};