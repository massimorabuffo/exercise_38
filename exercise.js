const isLogged = true;

//Ho risolto l'esercio inserndo le promise in due funzioni in modo tale da poter inserire i parametri nell esecuzione, ma non sono sicuro sia lo svolgimento corretto.

function checkLogin(log) {
    return new Promise((resolve, reject) => {
        if(log) {
            resolve (num = Math.random());
        } else reject(console.error('The variable is false'));
    })
}

function checkNum(num) {
    return new Promise((resolve, reject) => {
        if(num > 0.5) {
            resolve({name: "John", age: 24});
        } else reject(console.error('The number is less than 0.5.'));
    })
}

checkLogin(isLogged).then((num) => console.log(checkNum(num)));