const isLogged = true;

function checkLogin(log) {
    return new Promise((resolve, reject) => {
        if(log) {
            resolve (Math.random());
        } else reject(console.error('The variable is false'));
    })
}

function checkNum(num) {
    return new Promise((resolve, reject) => {
        if(num > 0.5) {
            resolve(console.log({name: "John", age: 24}));
        } else reject(console.error('The number is less than 0.5.'));
    })
}

checkLogin(isLogged).then((num) => checkNum(num));