'use strict'

/*

function Cat(color, weight,tail,sayHi){
    
        this.color = color;
        this.weight = weight;
        this.tail = tail;
        this.sayHi = function(){ 
            return `my name is ${this.name}`;
    };
}



const cat = new Cat ('gray',2500,'long','Vasya');
const cat = new Cat ('blue',500,'long','Inna');
const cat = new Cat ('green',1000,'long','Kolya');
const cat = new Cat ('red',1500,'long','Petya');


function Car(brand, model, power,accelerate){
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.speedCar = 0;
    this.accelerate = accelerate;
    this.acceleration = function(){
        return this.speedCar += this.accelerate;
    }
    this.isRides = function(){
        return this.accelerate > 0;
    }

}

const car = new Car('bmw', 'x5', 300);

*/


//   DAY 2

/*

function Box(size, color, content){
    this.content = content;
    this.size = size;
    this.color = color;
    this.open = function(){
        return `${this.content} opened`;
    }
}

function Crate(size, material, content){
    this.content = content;
    this.size = size;
    this.material = material;
}

Crate.prototype = new Box(); // задаем прототип(Box) для Crate

const crate1 = new Box("small", "wood", "testContent");

console.log(crate1);
console.log(crate.open());











function User(age, name){
    this.isMale = function(){
        return true;
    };
    this.age = 18;
    this.name = 'Vasya';
    this.sayHi = function(){
        return `Hi, my name is ${this.name}`;
    }
}

Employee.prototype = new User();

function Employee(salary){
    this.salary = salary;
}

const employee = new Employee('SALARY', 12, 'Vasya');

console.log(employee);









const controlObj = {
    content: "content",
    test: "test",
};

const anotherObj = controlObj;






*//*


const arr = [
    12,
    23,
    45,
    467,
    'gfver',
    false,
    "sfs654",
    true,
    'dsgdfg',
    'serdgfeg'
];


function arrOne(array){


    for(let i = 0; i < array.length;i++){
            console.log(array[i]);
    }

return array;

}


console.log(arrOne(arr));


*/

const controlArray = ['wdfge', 'wertwe', 'werte', 'ertee']

function MyArray(){
    this.length = 0

    for(let i = 0; i < arguments.length; i++){

        this[this.length] = arguments[i];
        
        this.length++
    }


     

    this.pop = function(i){

            

        for(let i = this.length;i < arguments.length;i++){
            this[this.length] = arguments[i];
        
            this.length++
        }
        
            


            return this.length = length;
    }





}


const myArr = new MyArray('test', 'test2', 'test3', 'test4');

console.log(myArr.pop);
console.log(myArr.push("test"));





// let macDon = prompt('Сделайте заказ: 1 - Пицца, 2 - Картошка Фри, 3 - Еще там что-то')

// switch (macDon){
//     case 'A':
//     case '1':{
//         console.log('Вы выбрали пиццу');
//     }
//     break;
//     case 'B':
//     case '2': {
//         console.log('Вы выбрали картошку Фри');
//     }
//     break;
//     case 'C':
//     case '3':{
//         console.log('Вы выбрали еще там что-то');
//     }
//     break;
//     default:{
//         console.log('Не сделал заказ, не занимай очередь')
//     }

// }






































