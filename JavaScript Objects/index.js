console.log("Question 1:");
var car = {
    brand:"TATA",
    model:"Nexon",
    year:2024
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

console.log("Question 2:");
let persons ={};
persons.firstName="varun",
persons.lastName="pathi",
persons.age=22

delete persons.age

console.log(persons.firstName);
console.log(persons.lastName);
console.log(persons.age);

console.log("Question 3:");
var book={
    title:"Bachpan",
    author:"Ravi Teja"
};

function funName(obj,key){
    return key in obj;
}

console.log(funName(book,"title"));
console.log(funName(book,"author"));

console.log("Question 4:");

let student = {
    name: "Varun",
    age: 21,
    grade: "A"
  };
  
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }

  console.log("Question 5:");

  function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;
    }
    return count;
  }
  
  let users = {
    name: "Shireesh",
    age: 30,
    isAdmin: true
  };
  
  console.log(countProperties(users));  

  console.log("Question 6:");

  let calculator = {
    num1: 10,
    num2: 3,
    add() {
      return this.num1 + this.num2;
    },
    subtract() {
      return this.num1 - this.num2;
    }
  };
  
  console.log(calculator.add());       
  console.log(calculator.subtract());  
  
  console.log("Question 7:");

  let use = {
    name: "Manoj",
    age: 22
  };
  
  function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
  
  let userClone = cloneObject(use);
  console.log(userClone);  


  console.log("Question 8:");

  let userInfo1 = {
    name: "Varun",
    age: 22
  };
  
  let userInfo2 = {
    age: 23,
    city: "New York"
  };
  
  let mergedUsers = Object.assign({}, userInfo1, userInfo2);
  
  console.log(mergedUsers);  
  
  console.log("Question 9:");

  function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("Siddhu", 24);
  console.log(newUser); 
  
  console.log("Question 10:");

  let company = {
    name: "Tech Corp",
    employees: [
      { name: "Varun", position: "Developer" },
      { name: "Ganesh", position: "Designer" }
    ]
  };
  
  console.log(company.employees[0].name);   
  console.log(company.employees[1].position);  
  
  console.log("Question 11:");

  let fruitPrices = {
    apple: 2,
    banana: 1,
    cherry: 3
  };
  
  function getKeys(obj) {
    return Object.keys(obj);
  }
  
  function getValues(obj) {
    return Object.values(obj);
  }
  
  console.log(getKeys(fruitPrices));   
  console.log(getValues(fruitPrices)); 
  
  console.log("Question 12:");

  let salaries = {
    Vishnu: 200,
    Vardhan: 150,
    Krishna: 300
  };
  
  function sortSalaries(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  }
  
  console.log(sortSalaries(salaries));  
  
  console.log("Question 13:");

  let user = {
    name: "Sharuk",
    age: 25,
    city: "Australia"
  };
  
  let { name, age, Town } = user;
  
  console.log(name);  
  console.log(age);   
  console.log(Town);  
  
  console.log("Question 14:");

  let person = {
    name: "Pathi Varun",
    age: 22,
    address: {
      street: "GMR Township",
      Town: "Suryapet",
      zipCode: 508213
    }
  };
  
  let { address: { street, city, zipCode } } = person;
  
  console.log(street);  
  console.log(city);    
  console.log(zipCode); 
  
  console.log("Question 15:");

  let user1 = { name: "Shireesh", age: 22 };
let user2 = { city: "Miryalaguda", country: "India" };

let mergedUser = { ...user1, ...user2 };

console.log(mergedUser);  

  console.log("Question 16:");

  let settings = {
    theme: "dark",
    fontSize: "16px",
    language: "en"
  };
  
  Object.freeze(settings);
  
  settings.theme = "light";  
  console.log(settings);     
  
  console.log("Question 17:");

  let scores = {
    math: 90,
    english: 80,
    science: 85
  };
  
  let scoreEntries = Object.entries(scores);
  console.log(scoreEntries);
  
  console.log("Question 18:");

  let team = {
    player1: 5,
    player2: 10,
    player3: 7
  };
  
  function updateScore(obj, increment) {
    for (let key in obj) {
      obj[key] += increment;
    }
  }
  
  updateScore(team, 3);
  console.log(team);  
  
  console.log("Question 19:");

  let rectangle = {
    width: 10,
    height: 5,
    area() {
      return this.width * this.height;
    }
  };
  
  console.log(rectangle.area()); 
  
  console.log("Question 20:");

  let products = {
    "laptop": 1000,
    "phone": 500,
    "tablet": 700
  };
  
  function findMaxPrice(obj) {
    let maxPrice = 0;
    let maxProduct = "";
  
    for (let key in obj) {
      if (obj[key] > maxPrice) {
        maxPrice = obj[key];
        maxProduct = key;
      }
    }
  
    return maxProduct;
  }
  
  console.log(findMaxPrice(products));  


  