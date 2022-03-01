const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,id,email,university){
        super(name,id,email);
        this.university = university;
    }
    getUniversity = ()=> this.university;
    getRole = ()=> 'Intern';
};

module.exports = Intern;