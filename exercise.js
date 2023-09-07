const isLogged = true;

let promise = new Promise((resolve, reject) => {
    if(isLogged) {
        resolve(num = Math.random());
    } else reject(new Error('isLogged is false.'));
})

let promise2 = new Promise((resolve, reject) => {
    if(num > 0.5) {
        resolve({name: "John", age: 24});
    } else reject(new Error ('The number is less than 0.5.'));
})

// console.log(promise);
// console.log(promise2);

promise.then(() => console.log(promise)).then(() => console.log(promise2));