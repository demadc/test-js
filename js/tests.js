"use strict";


// Задача 6_'через введення повної назви місяця'
/*
const monthBirth = prompt("В якому місяці ви народилися?").toLowerCase();
let season;

switch (monthBirth) {
    case 'december':
        season = 'Winter';
        break;
    case 'january':
        season = 'Winter';
        break;
    case 'february':
        season = 'Winter';
        break;
    case 'march':
        season = 'Spring';
        break;
    case 'april':
        season = 'Spring';
        break;
    case 'may':
        season = 'Spring';
        break;
    case 'june':
        season = 'Summer';
        break;
    case 'july':
        season = 'Summer';
        break;
    case 'august':
        season = 'Summer';
        break;
    case 'september':
        season = 'Autumn';
        break;
    case 'october':
        season = 'Autumn';
        break;
    case 'november':
        season = 'Autumn';
        break;
    default:
        console.log('Такого місяця не існує');
        break;
}
*/
//Konspekt

/* const clients = ["Mango", "Poly", "Ajax", "Dynamo"];
const lastElementIndex = clients.length - 1;

clients[0] = 'Avacado'
clients[1] = 'Katty'
console.log(clients[0], clients[1]);
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"

*/


// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// const name = 'ГАЛИНА';
// const age = 35;
// const language = 'JAVASCRIPT';
// const hello = `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`;
// console.log(hello);


// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt('What is your name?');
// const email = prompt('What is your email?');
// const phone = prompt('What is your phone number?');
// const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ПОЧТУ ${email} І ТЕЛЕФОН ${phone} `;
// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const firstware = Number(prompt('Первый товар'));
// const secondware = +prompt('Второй товар');
// const thirdware = Number(prompt('Третий товар'));

// console.log(firstware + secondware + thirdware);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt('СКІЛЬКИ МІСЯЦІВ МАЄ РІК?'));
// if (month === 12){
//     console.log('ВІРНО');


// }  else {
//     console.log('НЕ ЗНАЄТЕ? 12');
// }ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО ,
//  ЧИ НЕ ПАРНЕ.
// const userNumber = Number(prompt('ВВОДИТИ ЧИСЛО?'));
// if (userNumber % 2 === 0) {
//     console.log('Парне');

// } else {
//     console.log('НеПарне');
// }

//ЗАДАЧА 6
//НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ,
// І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const monthBirth = Number(prompt("В якому місяці ви народилися?"));

// if (monthBirth === 12 || monthBirth === 1 ||monthBirth === 2) {
//     console.log ("Зима");

// }else if (monthBirth >= 3 && monthBirth < 6) {
//     console.log ("Весна");
// } else if (monthBirth >= 6 && monthBirth < 9) {
//     console.log("Літо");
// } else if (monthBirth >= 9 && monthBirth < 12) {
//     console.log("Осінь");

// } else {
//     console.log ("Такого місяця не існує")
// }
 
// Задача 6_'через введення повної назви місяця'

/*const monthBirth = prompt("В якому місяці ви народилися?").toLowerCase();
console.log(monthBirth);
let season;

switch (monthBirth) {
    case 'december':
        season = 'Winter';
        break;
    case 'january':
        season = 'Winter';
        break;
    case 'february':
        season = 'Winter';
        break;
    case 'march':
        season = 'Spring';
        break;
    case 'april':
        season = 'Spring';
        break;
    case 'may':
        season = 'Spring';
        break;
    case 'june':
        season = 'Summer';
        break;
    case 'july':
        season = 'Summer';
        break;
    case 'august':
        season = 'Summer';
        break;
    case 'september':
        season = 'Autumn';
        break;
    case 'october':
        season = 'Autumn';
        break;
    case 'november':
        season = 'Autumn';
        break;
    default:
        console.log('Такого місяця не існує');
        break;
}
console.log(season);
*/

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ,
//  І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ ,
//  ЩО НЕ ВІРНИЙ ЛОГІН


// const login = prompt(`введи логін`);
// const password = prompt('введи пароль');
// const loginAdmin = "room";
// const passwordAdmin = "four";
// // if (loginAdmin === login && passwordAdmin === password){
// // 	console.log("вірний");

// // } else {
// // 	console.log("Невірно");
// // }

// const loginAd = loginAdmin === login && passwordAdmin === password ? "вірний" : "Невірно";
// console.log(loginAd);

//Задача 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

//const period = prompt('ПЕРІОД ПІДПИСКИ НА СЕРВІС');
//const UpPeriod = period.toUpperCase();
// if (UpPeriod === 'ДЕНЬ') {
//     console.log('ціна 1.99')
// } else if (UpPeriod === 'НЕДІЛЯ') {
//     console.log('ціна 5.99')
// } else if (UpPeriod === 'МІСЯЦЬ') {
//     console.log('ціна 10.99')
// } else if (UpPeriod === 'РІК') {
//     console.log('ціна 100.99')
// } else {
//     console.log('такого периода нема')
// }

/*switch (UpPeriod) {
    case 'ДЕНЬ':
        console.log('ціна 1.99')
        break;

// case 'НЕДІЛЯ':
//     console.log('ціна 5.99')
//     break;

// case 'МІСЯЦЬ':
//     console.log('ціна 10.99')
//     break;

<<<<<<< Updated upstream
case 'РІК':
    console.log('ціна 100.99')
        break;
    default:
        console.log('такого периода нема')
         break;        
}*/




// DC

//ЗАДАЧА 9
//НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ 
//ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10
/*const min = 5;
const max = 500;

for (let i = min; i <= max; i += 1) {
    console.log(i);
    if (i % 10 === 0){
        console.log('Число кратне 10:', i);
    }
  }

*/


//ЗАДАЧА 10
//НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
//"Your name isn't very long"


/*
AutoCheck#11

function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 let words = message.split(' ');
   console.log(words);
 const arrLength = words.length; 
   console.log(arrLength);
 let totalWordsPrice = arrLength * pricePerWord;
   
 return totalWordsPrice;
    // Change code above this line
 }

 console.log(calculateEngravingPrice('for you only', 30));
 */

 /*
 //AutoCheck#14

 const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length-1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
*/

/*//AutoCheck#18

function calculateTotal(number) {
    // Change code below this line
     let getSum = 0;
       
     for (let i = 1; i <= number; i += 1) {
       getSum = getSum + i; 
     }
   
     return getSum;
     // Change code above this line
   }
   console.log(calculateTotal(7));

*/

/*//AutoCheck#19

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i <= fruits.length - 1; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
*/

/*//AutoCheck#20

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total = total + order[i];
  }
    // Change code above this line
    return total;
  }
  console.log(calculateTotalPrice(10, 21, 8));

  */

/*//AutoCheck#21

function findLongestWord(string) {
    // Change code below this line
   const words = string.split(" ");
    let longestWord = "";

    for (const word of words)
    if (word.length > longestWord.length) {
    longestWord = word;
  }
 return longestWord;
  
    // Change code above this line
  }
*/

/*//AutoCheck#22


function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line

    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
    
    // Change code above this line
    return numbers;

  }
  console.log(createArrayOfNumbers(1, 8));  
*/

  /*//AutoCheck#23
  
  function filterArray(numbers, value) {
    // Change code below this line
 const newArr = [];
    
    for (let i = 0; i < numbers.length; i += 1){
        
        if (numbers[i] > value) {
            newArr.push(numbers[i]);
        } 
        
    }
 return newArr;
   // Change code above this line
 }
 console.log(filterArray([12, 24, 8, 41, 76], 20));

*/

/*//AutoCheck#24

 function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
  
    return fruits.includes(fruit); // Change this line
  }
  
  console.log(checkFruit('apple'));
  console.log(checkFruit('plum'));
  console.log(checkFruit('pear'));
  console.log(checkFruit('banana'));
  console.log(checkFruit('orange'));
*/

//AutoCheck#25
/*
  function getCommonElements(array1, array2) {
    // Change code below this line
  let commonArr = [];
  
    for (let i = 0; i <= array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            commonArr.push(array1[i]);
        }
    }
  
    return commonArr;
   // Change code above this line
  }
  
  console.log(getCommonElements([17, 13, 10, 21, 8], [8, 10, 21, 17, 5]));

*/

//AutoCheck#26
/*
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  
    for (const i of order) {
      total += i;
    }
  
    // Change code above this line
    return total;
  }
  console.log(calculateTotalPrice([10, 17, 21, 8, 5]));
*/

//AutoCheck#27
/*

function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
  
    for (let number of numbers) {
  
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
  
    return filteredNumbers;
    // Change code above this line
  }
  console.log(filterArray([12, 24, 8, 41, 76], 20));
*/

//AutoCheck#29
/*
function getEvenNumbers(start, end) {
    // Change code below this line
   let newArr = [];
   
   for (let i = start; i <= end; i+=1) {
        if (i % 2 === 0) {
            newArr.push(i);
        }
   }
 
        return newArr;
     // Change code above this line
   }
   console.log(getEvenNumbers(1, 17));

*/


//AutoCheck#30
/*
   const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
  
}
console.log(number);

*/

//AutoCheck#31

/*
function findNumber(start, end, divisor) {
    
    // Change code below this line
    let number;
  
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        number = i;
        return number;
      }
    }
  
    
    // Change code above this line
  }

  console.log(findNumber(1, 17, 5))
*/

//AutoCheck#32
//ver1
/*
  function includesArr(array, value) {
    // Change code below this line
    let newArr = [];

    for (let i = 0; i <= array.length; i += 1) {
        if (array.includes(value)) {
            newArr.push(value);
        return newArr;
            
        }
        return false;

    }
    
    // Change code above this line
    
  }

  console.log(includesArr([1, 5, 8, 10, 17], 5));
  console.log(includesArr([1, 5, 8, 10, 17], 21));
  */

  //ver2
/*Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).*/
/*
function includes(array, value) {
    // Change code below this line
    let newArr = [];  

    for (let i = 0; i <= array.length; i+=1) {
        if (array[i] % value === 0 || array[i] === value) {
            newArr.push(array[i]);
            return true;  
        }         
        
    // Change code above this line
  }

  return false;
}
  console.log(includes([1, 5, 8, 10, 17, 21], 21));
  console.log(includes([1, 5, 8, 10, 17, 21], 10));
  console.log(includes([1, 5, 8, 10, 17, 21], 17));
  console.log(includes([1, 5, 8, 10, 17, 21], 13));
  console.log(includes([1, 5, 8, 10, 17, 21], 8));
*/


// autocheck_Module3
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {country: 'Jamaica',
city: 'Kingston'};  

console.log(apartment);
*/
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (let key in apartment) {
  keys.push(key);
  console.log(keys);
};
for (let key in apartment) {
  values.push(apartment[key]);
  console.log(values);
}

*/


// autocheck_11
/*
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}
*/

/*
// autocheck_12

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  const keys = Object.keys(object);
for (const key of keys) {
  propCount += 1;
}
  // Change code above this line
  return propCount;
}
*/

// autocheck_13
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
 for (const key of keys) {
  values.push(apartment[key]);
   
 }
*/
/*
// autocheck_16

 function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const keys = Object.keys(salaries);
  const values = Object.values(salaries);
    
  for (let value of values) {
    
    totalSalary += value;
    
  }
  console.log(totalSalary);
  // Change code above this line
  return totalSalary;

  
}


countTotalSalary({ mango: 100, poly: 150, alfred: 80});
*/


// autocheck_17
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (let color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
*/


// autocheck_18
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for (let product of products) {
  if (product.name.toLowerCase() === productName.toLowerCase()){
    return product.price;
  }
  
}

  return null;
  // Change code above this line
}

getProductPrice('Rubin');
*/



// autocheck_19
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
 const values = [];
  
for (let product of products) {
  if (product[propName]) {
    values.push(product[propName]);
  }  
}
 return values;


  // Change code above this line
}
*/


// autocheck_31
/*
function add(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return  sum;
  add(17, 10, 8, 21, 5, 4, 2);
  console.log(sum);
}
*/

// autocheck_34
/*
const bookShelf = {
  // Change code below this line
  
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
   return `Updating book ${oldName} to ${newName}`;
  
  // Change code above this line
},
};
bookShelf.getBooks();
bookShelf.addBook("Haze");
bookShelf.removeBook("Red sunset");
bookShelf.updateBook("Sands of dune", "Dune");
*/


// Ex. from Konspekt
/*const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["Останнє королівство"]
bookShelf.addBook("Імла");
bookShelf.addBook("Страж снів");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
bookShelf.removeBook("Імла");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

*/

// Ex. from Konspekt
/*
const bookShelf = {
   books: ["The last kingdom", "Haze", "The guardian of dreams"],
   updateBook(oldName, newName) {
    // Change code below this line
  
    const oldNameBook = bookShelf.books.indexOf(oldName);
   
      bookShelf.books.splice(oldNameBook, 1, newName);
       
    // Change code above this line
  },
};
*/


// autocheck_36
/*
const atTheOldToad = {
  // Change code below this line
potions: [],


  // Change code above this line
};
*/

// autocheck_41
/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Change code below this line

  getPotions() {
    const potionArray = [];
    
    for (let potion of this.potions) {
      potionArray.push(potion);
    }
    return potionArray;
  },

  addPotion(newPotion) {

    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return this.potions.push(newPotion);
  },

    removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        break;
      }
    }
  },
  
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        break;
      }
    }
 },
};
*/

// Ex_from_Konspekt

/*
const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["Останнє королівство"]
bookShelf.addBook("Імла");
bookShelf.addBook("Страж снів");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
bookShelf.removeBook("Імла");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]
*/


// NEED to discuss with tutor hex: #f34336
/*
const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
  
    // Change code below this line
  
    getPotions() {
      return this.potions;
    },
  
    addPotion(newPotion) {
      const nameExist = `Error! Potion (${newPotion}) is already in your inventory!`;
      for (let potion of this.potions) {
        if (potion.name === newPotion) {
          
        }  
      }
      this.potions.push(newPotion); 
    },
  
    removePotion(potionName) {
      const potionIndex = this.potions.indexOf(potionName);
      return this.potions.splice(potionIndex, 1)
    },
    
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);
      return this.potions.splice(potionIndex, 1, newName)
   },
  
  };
  
  console.log(atTheOldToad.getPotions());
  atTheOldToad.addPotion({name: "Speed potion", price: 520}); 
  atTheOldToad.addPotion({name: "F-16", price: 333});
  //atTheOldToad.addPotion({name: "ATACMS", price: 1500});
  //console.log(atTheOldToad.getPotions()); 
  //atTheOldToad.removePotion({name: "ATACMS", price: 1500});
  //console.log(atTheOldToad.getPotions());
  //atTheOldToad.updatePotionName({name: "F-16", price: 333}, {name: "B-52", price: 555});
  //console.log(atTheOldToad.getPotions());
  */

  
  // Module 4_autocheck_4
  // NEED to discuss with tutor hex: #f34336 is it possible to use FOR???
  /*
const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
      if (!this.pizzas.includes(pizzaName)) {
        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
      } 
      return onSuccess(pizzaName);
    },
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
  pizzaPalace.order("Smoked", makePizza, onOrderError);
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  pizzaPalace.order("Big Mike", makePizza, onOrderError);
  pizzaPalace.order("Vienna", makePizza, onOrderError);
  */

  
// Module 4_autocheck_13

//ver_1
/*
 function changeEven(numbers, value) {
    // Change code below this line
    const newArr = [];
  
    numbers.forEach(number => {
      if (number % 2 === 0) {
        newEven.push(number + value);
        
      } else {
        newEven.push(number);
      }
       
    });
       return newEven;
    // Change code above this line
  }

  console.log(changeEven([5, 17, 10, 21, 8, 4, 2, 9], 3));
*/



// Module 4_autocheck_17

/*
// Change code below this line
const getUserNames = users => 
    users.map(user => user.name);
    
  // Change code above this line
*/

  // Module 4_autocheck_18

// Initial task:

/*
// Change code below this line
const getUserEmails = users => {
    

};
// Change code above this line
*/

// Task solution: 
/*
const getUserEmails = users => users.map(user => user.email);
*/


// Module 4_autocheck_20
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter((books, idx, arr) => 
arr.indexOf(books) === idx);
*/


// Module 4_autocheck_25
/*
//ver_1_DONE
const getFriends = (users) => {
   const allFriends = users.flatMap(user => user.friends);
  const uniqFriends = allFriends.filter((user, idx, arr) => 
  arr.indexOf(user) === idx);
  
  return uniqFriends;
};

// ver_2_DONE
const getFriends = users => users.flatMap(user => 
  user.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);
  */


// Module 4_autocheck_35

// ver_1
/*
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce ((acc, player, idx, arr) 
=> {
  return acc + player.playtime / player.gamesPlayed;
}, 0);
*/

// ver_2
/*
  const players = [
  { name: "John", playtime: 120, gamesPlayed: 5 },
  { name: "Alice", playtime: 90, gamesPlayed: 3 },
  { name: "Bob", playtime: 180, gamesPlayed: 7 },
];

// Використання методу reduce() для розрахунку середнього часу та отримання загальної суми
const { totalPlaytime, averagePlaytime } = players.reduce(
  (accumulator, player) => {
    const { playtime, gamesPlayed } = player;

    accumulator.totalPlaytime += playtime; // Додавання часу гри до загальної суми
    accumulator.averagePlaytime += playtime / gamesPlayed; // Додавання середнього часу гри до загальної суми середніх

    return accumulator;
  },
  { totalPlaytime: 0, averagePlaytime: 0 }
);

console.log(totalPlaytime); // Загальна сума часу
console.log(averagePlaytime); // Середній час

console.log(totalAveragePlaytimePerGame);
*/


// Module 4_autocheck_36
/*
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);
};
*/
// Module 4_autocheck_47

//Доповни функцію getSortedFriends(users) таким чином, 
//щоб вона повертала масив унікальних імен друзів (властивість friends), 
//відсортований за алфавітом.
/*
const getSortedFriends = users => {
   return users.flatMap((user, idx, arr) => user.friends)
  .filter((user, idx, arr) => arr.indexOf(user) === idx).sort();
};
*/


// Module 4_autocheck_48
/*
Доповни функцію getTotalBalanceByGender(users, gender) таким чином, 
щоб вона повертала загальний баланс користувачів (властивість balance), 
стать яких (властивість gender) збігається зі значенням параметра gender.
*/

// Рішення
//У цьому коді ми:
//Використовуємо метод filter() для фільтрації користувачів за статтю.
//Використовуємо метод reduce() для обчислення загального балансу користувачів.
/*
const getTotalBalanceByGender = (users, gender) => {
  const totalBalance = users
    .filter((user) => user.gender === gender) // Фільтрація користувачів за статтю
    .reduce((sum, user) => sum + parseFloat(user.balance), 0); // Обчислення загального балансу

  return totalBalance;
};
*/



// TASKS for INTERVIEW #f34336 
/*
// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

// function Person({ firstName, lastName, age, gender, interest }) {
  
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interest = interest;
// Person.prototype.bio = function() {
//    console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається  ${this.interest}`)
// }
  
//   Person.prototype.greeting = function() {
//   console.log(`Привіт, я ${this.firstName}`)
//   }
 
//   }

// const newPerson = new Person({ firstName: 'Pavlo', lastName: "Smit", age: '40', gender: 'men', interest: 'book' });

// console.log(newPerson);

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

class User {
  constructor({ username, age, numberOfPosts }) { 
    this.username = username;
    this.age = age;
    this.numberOfPosts = numberOfPosts;

  }
  getInfo() { 
    return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
  } //  під час прописування ф-ї в КЛАСІ, вона одразу автоматично(під капотом), буде прописана в ПРОТОТИП  

getInfo2 = () => { 
    return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
  } // стрілочна функція не буде автоматично прописана як функція в прототипі, вона буде в середені класу,
  таким чином, не треба використовувати => ф-ї в КЛАСАХ!

}
const newUser = new User({ username: 'Pavel', age: 25, numberOfPosts: 25 });
console.log(newUser);
*/

/*const Person = {
  firstName,
    lastName,
    age,
    gender,
   interest,
   bio() {
      // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
   },
   greeting() {
     // Привіт, я {імя}
   },
 };
  */

 /*
 function Person({ firstName, lastName, age, gender, interest }) {
    
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
   this.gender = gender;
   this.interest = interest;
  
 // при використанні ф-ї конструктор, ф-я яка прописана як в прикладі, через THIS, буде прописана не в ПРОТОТИПІ,
 // а безпосередньо в тілі ф-ї КОНСТРУКТОР. На співбесідах часто простсять прописати ф-ї в Прототипі, таким чином,
 // потрібно вручну прописати через  //Person.prototype.bio = function(), щоб ф-я bio відобразилася в ПРОТО!!!

 this.bio = function() { 
    console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається  ${this.interest}`)
 }
    
   this.greeting = function() {  //Person.prototype.greeting = function()
   console.log(`Привіт, я ${this.firstName}`)
   }
   
  }
  
 const newPerson = new Person({ firstName: 'Pavlo', lastName: "Smit", age: '40', gender: 'men', interest: 'book' });
  
 console.log(newPerson);
 */


 // Module 5_autocheck_11
 /*
 class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
  
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

*/

/*
class Car {
  static #MAX_PRICE = 50000;
  
  // Change code below this line
  
  static checkPrice (price) {

    if (price > Car.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum.';
    }
    return "Success! Price is within acceptable limits";
  }
  // Change code above this line
  
  constructor({ price }) {
    this.price = price;
  }
}
const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
*/


// Question for Mentor #f34336 - DONE
/*
const max = 100;
const min = 20;

for (let i = min; i>=min && i<=max; i+=1) {
  if (i%5 === 0) OR if(!(i%5)) {
console.log(i);
  }
}
*/

// TASK for INTERVIEW #f34336 - ASK MENTOR 
// Напиши скрипт сортування масиву РЯДКІВ в алфавітному порядку, за першою літерою елемента.

/*
const langs = ['cphyton', 'bjavascript', 'ac++', 'haskel', 'php', 'ruby'];
const arr = [];
for (let i = 0; i < langs.length; i+=0) {
  if (langs[0] > langs[i]){
    const result = langs.splice(i, 1)[0];
    langs.unshift(result)
  }
} 
console.log(result);
*/

/*
const numbers = [2, 17, 21, 8, 10, 5, 4, 1, 9, -14];
let min = numbers[0];
for (let num of numbers) {
  if (num < min) {
    min = num;
  }
}
console.log(min);
console.log(numbers);
*/