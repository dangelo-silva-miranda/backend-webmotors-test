/*
  Material consultado sobre allowNull e unique
  https://sequelize.org/master/manual/validations-and-constraints.html
*/
const tbAnuncioWebmotors = (sequelize, DataTypes) => {
  const tbanunciowebmotors = sequelize.define('tb_AnuncioWebmotors', {
    marca: { type: DataTypes.STRING(45), allowNull: false },
    modelo: { type: DataTypes.STRING(45), allowNull: false },
    versao: { type: DataTypes.STRING(45), allowNull: false },
    ano: { type: DataTypes.INTEGER, allowNull: false },
    quilometragem: { type: DataTypes.INTEGER, allowNull: false },
    observacao: { type: DataTypes.TEXT, allowNull: false },
  }, {
    timestamps: false,
    modelName: 'tb_AnuncioWebmotors',
  });
  return tbanunciowebmotors;
};

module.exports = tbAnuncioWebmotors;