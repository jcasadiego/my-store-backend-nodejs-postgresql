class UsersService {

  constructor(){
    this.users = [];
  }

  async create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  async find(){
    return this.users;
  }

  async findOne(id){
    return this.users.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('user not found')
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('user not found')
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;
