const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class CategoryService {

  constructor(){}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.Category.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
