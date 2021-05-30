



class Employee {
    constructor(name ='', id='', email='') {
    this.name = name;
    this.id = id;
    this.email = email;
};
}

// function Employee(name ='', id='', email='') {
//     this.name = name;
//     this.id = id;
//     this.email = email;
// };


Employee.prototype.getStats = function() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role:this.role,
    };


// getStats() {
//     return {
//       name: this.name,
//       id: this.id,
//       email: this.email,
//       role:this.role,
//     };
//   }

}
module.exports = Employee;

// module.exports = { writeFile, copyFile };