  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.gender = obj.gender;
        this.email = obj.email;  
    }
    getDetails() {
        return {
        name:this.name,
        age:this.age,
        gender:this.gender,
        email:this.email
        };
    }
}
class Employee extends Person {
    constructor(obj) {
        super(obj);
        this.salary = obj.salary;
        this.department = obj.department;
    }
    getEmployeeDetails() {
        return {
            salary:this.salary,
        department:this.department
        };
    }
}

const person1 = new Person(
    {
        name: "Person1 Name",
        age: 28,
        gender: "Person1 Gender",
        email: "Person1@mail.com"
    }
)
console.log(person1.getDetails());

const employee1 = new Employee(
    {
        name: "Employee1 Name",
        age: 28,
        gender: "Employee1 Gender",
        email: "Employee1@mail.com",
        salary: 100,
        department: "Employee department"
    }
)

console.log(employee1.getEmployeeDetails());
