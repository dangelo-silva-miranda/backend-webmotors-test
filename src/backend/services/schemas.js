/*
  Material consultado sobre Joi
  https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation
  https://joi.dev/api/?v=17.4.2#general-usage
*/
const Joi = require('joi');

const id = Joi.number().integer().positive();
const text = Joi.string();

const adDataSchema = Joi.object().keys({
  id,
  marca: text.max(45).required(),
  modelo: text.max(45).required(),
  versao: text.max(45).required(),
  ano: Joi.number().integer().positive().required(),
  quilometragem: Joi.number().integer().min(0).required(),
  observacao: text.required(),
});

module.exports = {
  adDataSchema,
};