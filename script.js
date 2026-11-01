//Exercise 1: Say Hello After a Delay (with .then)

function delayedGreet(name, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay);

    });
}
delayedGreet("Reut Juli", 2000)
    .then((message) => {
        console.log(message);
    });


//Exercise 3: Random Success or Failure (with .then and .catch)

function randomOperation() {
    return new Promise((resolve, reject) => {

        const randomNumber = Math.random();

        if (randomNumber < 0.5) {
            resolve("Success!");
        } else {
            reject("Failure!");
        }

    });
}
randomOperation()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


//Exercise 4: Timer Race - Which is Faster? (with .then)

function raceTimers() {
    const timerA = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timer A finished!");
        }, 2000);
    });

    const timerB = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timer B finished!");
        }, 3000);
    });

    return Promise.race([timerA, timerB]);
}
raceTimers()
    .then((message) => {
        console.log(message);
    });


// Exercise 6: Wait for 3 Promises Together (with .then)

function waitAll() {

    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 1000);
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second");
        }, 2000);
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third");
        }, 3000);
    });

    return Promise.all([promise1, promise2, promise3]);
}
waitAll()
    .then((results) => {
        console.log(results);
    });
//Exercise 8: Say 3 Things, One by One
function chainedGreetings(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

chainedGreetings("Hi!", 1000)
    .then((message) => {
        console.log(message);
        return chainedGreetings("How are you?", 2000);
    })
    .then((message) => {
        console.log(message);
        return chainedGreetings("Goodbye!", 1000);
    })
    .then((message) => {
        console.log(message);
    });


//Exercise 9: Read File → Count Words → Save Result (Chained .then) EXTRA
const fs = require("fs").promises;
function processFile(inputPath, outputPath) {
    return fs.readFile(inputPath, "utf8")
        .then((content) => {
            console.log(content);
        });
}
processFile("input.txt", "output.txt")
    .then((content) => {
        const wordCount = content.split(/\s+/).length;
        return wordCount;
    })
    .then((wordCount) => {
        console.log(`Word Count: ${wordCount}`);

    });
//Exercise 10: Get Data → Parse JSON → Show Title (Chained .then) EXTRA
const https = require("https");





// function stringPromise1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             resolve("---1---!");

//         }, 4000);
//     });
// }
// function stringPromise2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             resolve("---2---!");

//         }, 4000);
//     });
// }
// function stringPromise3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             resolve("---3---!");

//         }, 4000);
//     });
// }
// stringPromise1()
//     .then((message) => {
//         console.log(message);
//         return stringPromise2();
//     })
//     .then((message) => {
//         console.log(message);
//         return stringPromise3();
//     })
//     .then((result) => {
//         console.log(result);
//     })