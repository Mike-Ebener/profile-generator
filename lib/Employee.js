

class Employee {
    constructor(name ='', id, email) {
    this.name = name;
    this.id = 123;
    this.email = email;
};


getStats() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
    //   agility: this.agility
    };
  }

}
module.exports = Employee;
