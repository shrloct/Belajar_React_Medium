class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  const john = new Person('John', 25);
  john.introduce();


  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying and is in grade ${this.grade}.`);
    }
  }
  
  const jane = new Student('Sahrul', 20, 'A');
  jane.introduce();
  jane.study();
  