const fs = require('fs');
const filename = 'data.json';

fs.readFile(filename, (error, text) => {
    if (error) {
        console.error('Error while reading', filename);
        return;
    }
    try {
        const obj = JSON.parse(text);
        console.log(JSON.stringify(obj, null, 2));
    } catch (e) {
        console.error('Invalid JSON in file', filename, e);
    }
});

function readFilePromisified(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromisified(filename)
    .then((text) => {
        const obj = JSON.parse(text);
        console.log('------ Using Promise ------');
        console.log(JSON.stringify(obj, null, 2));
    })
    .catch((error) => {
        console.error('Invalid JSON in file', filename, e);
    }
);