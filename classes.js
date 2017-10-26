
// Classes

/*
Classes are a tool for building similar objects over and over again.
They are a construct that helps your organize your code.

Let's work with some employees at a company.
You work for Widget Co.  They have hundreds of employees.
Make a class to help us build all of the employees.
Each employee has:
- first_name
- last_name
- email
- age

Each employee can:
- makeWidget
    - This returns a string equal to the employees first name + last name + the word widget
    IE - "Dave Smith Widget"

call your class Employee and receive all the data in the constructor in the order listed
*/
class Employee {
    constructor(fName, lName, email, age){
        this.first_name= fName,
        this.last_name= lName,
        this.email= email,
        this.age= age
    }
    makeWidget(){
        return this.first_name + ' ' + this.last_name + ' Widget';
    }
}
var dave_smith = new Employee('Dave', 'Smith', 'dsmith@gmail.com', 32);
console.log(dave_smith.makeWidget()); 
/*

Next, make a manager for Widget Co.
The manager has all the same properties as an Employee.
They also have :

- reports (other employees) that defaults to an empty array
They can (methods) :
   - hire (employee)
        : Accepts a new employee as a parameter and pushes it to their list of reports
   - fire(index)
        : Fire removes employees from their list of reports at the given index

call your class Manager

*/
class Manager extends Employee {
    // extends to borrow stuff from employee
    constructor(fName, lName, email, age){
        super(fName, lName, email, age); //
        this.reports = [];
    }
    hire(empl){
        this.reports.push(empl);
    }
    fire(index){
        this.reports.splice(index, 1);
    }
}

var boss = new Manager('Bob', 'Johnson', 'bjohnson@gmail.com', 31)



/*
Manager for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
Progressive Managers have all the same properties as the manager, but
they also have :
- title - default 'Not a manager'
- bonus - default 0

When employees are added or removed we need to check and update their title.  Their titles are as follows:
0 : Not a manager
1-3 : Barely Manager
4-10 : Mostly Manager
11-50 : Manager
51-100 : Manager Plus
101+ : Bestest Manager

Everytime they fire an employee they get $100 added to their bonus.

call your class ProgressiveManager
*/

class ProgressiveManager extends Manager {
    constructor(fName, lName, email, age){
        super(fName, lName, email, age);
        this.title = 'Not a manager';
        this.bonus = 0;
        this.numEmployees = 0;
    }
    hire(empl){
        this.reports.push(empl);
        this.numEmployees++; 
        //update title                      // note: assuming manager status is based on current total employees, not num ever hired
        if(this.numEmployees === 0) {
            this.title = 'Not a manager';
        } else if(this.numEmployees < 4){
            this.title = 'Barely Manager';
        } else if(this.numEmployees < 11){
            this.title = 'Mostly Manager';
        } else if(this.numEmployees <51){
            this.title = 'Manager';
        } else if(this.numEmployees <101){
            this.title = 'Manager Plus';
        } else this.title = 'Bestest Manager';
    }
    fire(index){
        this.reports.splice(index, 1);
        this.numEmployees--;
        this.bonus += 100;
    }
}



/*
BLACK DIAMOND
Widget Co has a factory that makes widgets.
Factories have Machines

Make a Machine class that takes in no parameters
It has :
- widgets_made_count - default 0
- wear_and_tear_count - default 0
- needs_reboot - default false

It can :
- makeWidgets
    : This function takes in a number and increases widgets_made_count by that amount
      It also increases wear_and_tear_count by 1 for every 50
- fixMachine
    : This function sets needs_reboot to true
- reboot
    : This function returns a function that is called when the machine is done rebooting
      It should set decrease wear_and_tear_count by 10, and set needs_reboot to false

*/
