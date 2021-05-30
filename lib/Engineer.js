
class Engineer {
    constructor(name ='', id='', email='', github='') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
};
}

Engineer.prototype.getStats = function() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role:this.role,
      github:this.github,
    };
}

module.exports = Engineer;