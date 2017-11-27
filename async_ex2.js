var fs = require('fs');

fs.open('async_ex1.js', 'r', (err, handle) => {
    var SIZE = 50;
    var buf = new Buffer(SIZE);
    if (err) {
        console.log("cannot open: " + err.code + "("+err.message+")");
    } else {
        fs.read(handle, buf, 0, SIZE, null, (err, length) => {
            if (err) {
                console.log("cannot read: " + err.code + "("+err.message+")");
            } else {
                console.log("Contents: " + buf.toString('utf8', 0, length));
            }
        });
        fs.close(handle, () => { /* close error: ignored */ });
    }
});