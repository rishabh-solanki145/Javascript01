    // const numberss = [1, 2, 3];
    // const doubledNumbers = numberss.map(num => num * 2); 
    // // doubledNumbers is now [2, 4, 6], numbers is still [1, 2, 3]
    // console.log(numberss);
    // console.log(doubledNumbers);
    

//     const numbers = [1, 2, 3, 4, 5, 6];

// // Filter for even numbers
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

// // Filter for numbers greater than 3
// const greaterThanThree = numbers.filter(number => number > 3);
// console.log(greaterThanThree); // Output: [4, 5, 6]
    

// const fruits = ['apple', 'banana', 'orange'];

// fruits.forEach((fruit, index) => {
//   console.log(`Fruit at index ${index}: ${fruit}`);
// });

/*

function calculateCartPrice(...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))*/

 const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//  marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);