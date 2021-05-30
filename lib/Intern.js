
class Intern {
    constructor(name ='', id='', email='', school='') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
};
}

Intern.prototype.getStats = function() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role:this.role,
      school:this.school,
    };
}

// getStats() {
//     return {
//       name: this.name,
//       id: this.id,
//       email: this.email,
//       role:this.role,
//     };
//   }


module.exports = Intern;