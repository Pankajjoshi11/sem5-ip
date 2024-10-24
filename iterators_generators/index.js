// // 5. Iterators:
// const iterableData = {
//     data: [15, 25, 35, 45],
//     [Symbol.iterator]: function () { // Corrected function definition
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.data.length) {
//                     return { value: this.data[index++], done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// const iterator = iterableData[Symbol.iterator]();
// console.log(iterator.next()); // { value: 15, done: false }
// console.log(iterator.next()); // { value: 25, done: false }
// console.log(iterator.next()); // { value: 35, done: false }
// console.log(iterator.next()); // { value: 45, done: false }
// console.log(iterator.next()); // { done: true }

// // Using a for...of loop
// for (let value of iterableData) {
//     console.log(value); 
// }



function* generator(limit) {
    let val = 1;
    while(val <= limit) yield val++;
}

const gen = generator(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());