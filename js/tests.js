


// Задача 6_'через введення повної назви місяця'

const monthBirth = prompt("В якому місяці ви народилися?").toLowerCase;
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
//Konspekt

/* const clients = ["Mango", "Poly", "Ajax", "Dynamo"];
const lastElementIndex = clients.length - 1;

clients[0] = 'Avacado'
clients[1] = 'Katty'
console.log(clients[0], clients[1]);
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"

*/