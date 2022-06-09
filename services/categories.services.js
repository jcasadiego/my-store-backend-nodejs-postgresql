class CategoriesService {

  constructor(){
    this.categories = [];
  }

  async create(data){
    const newCategories = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategories);
    return newCategories;
  }

  async find(){
    return this.categories;
  }

  async findOne(id){
    return this.categories.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('category not found')
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('category not found')
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
