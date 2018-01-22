
let graceOfFriend = Math.random();
const ENOUGH_GRACE = 0.5;

// promise

const willUseCar = new Promise((resolve, reject) => {
    if (graceOfFriend >= ENOUGH_GRACE) {
        resolve({make: 'BMW', year: 2018, color: 'pink'});
    } else {
        reject(graceOfFriend);
    }
});

// calling the promise

function askFriend() {
    willUseCar.then(fulfilledMessage => {
        console.log('Yeah ~~~', fulfilledMessage);
    }).catch(unfulfilledMessage => {
        console.log('Oops, not enough grace', unfulfilledMessage);
    });
}

askFriend();