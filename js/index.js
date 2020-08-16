'use strict'


// const controlArray = ['wdfge', 'wertwe', 'werte', 'ertee']

// function MyArray(){
//     this.length = 0

//     for(let i = 0; i < arguments.length; i++){

//         this[this.length] = arguments[i];
        
//         this.length++
//     }


     


//     this.forEach = function (callback){
        
//     }
//     }




// const myArr = new MyArray('test', 'test2', 'test3', 'test4');



// function power(number,i) {
//     if ( i === 1){
//         return number;
//     }
//     return number * power(number, i-1);
// }

// function logRange(a, b){
    
//     if(a === b || a > b || ){
//         return "норм числа вводи"
//     }
//    console.log (a);
//     if(a < b){
//     logRange(a + 1,b);
//     } 

// }


// function customFlat(array, depth = 1){
//     let newArr = [];
//     for(let i = 0; i<array.length; i++){
//         if( Array.isArray(array[i]) ){
//                 newArr = newArr.concat(customFlat(array[i], depth -1))
//         }else{
//             newArr.push(array[i])
//         }
//     }
//     return newArr;
// }

// const symbolExample = Symbol("test");

// const obj ={
//     test: "test",
//     symbolExample: symbolExample,
// };
// console.log(obj);


// function log(...rest) { //rest operator
//     const array = ["test", "string", trye, {}];
//     console.log(rest);
//     console.log(array);
//     console.log(...array, ...rest); // spread operator
    
// }

// log(1, "test", 4, "st", 5);


//    const set = new Set([1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]);

//     console.log(set);
    
/* 
function setMy(array) {


    const arr = new Set(array);

    
    return [...arr];
    
} */


function sumOfVowels(str){

    let sum = 0;

    for(let i of str){
        if(i === "a"|| i === "o" || i === "i" || i === "u" || i === "e"){
        sum ++;
        }
    }

    return(sum);

}


function multiples(n){

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbazz");
        }else if(i % 3 === 0){
            console.log("fizz");
        }else if(i % 5 === 0){
            console.log("buzz");
        }else{
            console.log(i);
        }

        
    }

}



function avg(){
    

  
}































function addNum(n){

    let b = n;


   return function(a){

    return a += b;
         
        }

}





































function operation(num1, num2, fn){

    
    
}


































function Obj(){

    this.method1 = "метод1"
    this.method2 = "метод2"
    this.method3 = "метод3"

};


const obj = new Obj()






