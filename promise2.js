// cascading promises: from promise1.js

let graceOfFriend = Math.random();
const ENOUGH_GRACE = 0.5;

// promise 1

const willUseCar = new Promise((resolve, reject) => {
    if (graceOfFriend >= ENOUGH_GRACE) {
        resolve({make: 'BMW', year: 2018, color: 'pink'});
    } else {
        reject(graceOfFriend);
    }
});

// promise 2
// You promise other friends that you will give them ride to Florida during the spring break

const willGiveRide = function(car) {
    return new Promise((resolve, reject) => {
        resolve('Guys, jump in my ' + car.make + '!');
    });
};

// calling the promises

function askFriend() {
    willUseCar.then(willGiveRide).then(fulfilledMessage => {
        console.log('fulfilled:', fulfilledMessage);
    }).catch(unfulfilledMessage => {
        console.log('unfulfilled:', unfulfilledMessage);
    });
}

askFriend()