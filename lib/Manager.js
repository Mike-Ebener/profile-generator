// const Employee = require('./Employee');

// class Manager extends Employee {
//     constructor(name, id, email) {
//         super(name, id, email);
//         this.office = office;
//     };
// }

class Manager {
    constructor(name ='', id='', email='', office='') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
};

}

// class Manager extends Employee {
//     constructor(name ='', office='') {
//         super(name, id, email);
//         this.office = office;
//     };


module.exports = Manager;



// getStats() {
//     return {
//       name: this.name,
//       id: this.id,
//       email: this.email,
//       role:this.role,
//     };
//   }

// }
// module.exports = Manager;