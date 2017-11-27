function f1() {
    console.log('f1');
}
f1();
setTimeout(() => {
    console.log('timer1')
}, 500);
setTimeout(() => {
    console.log('timer2')
}, 0);
setTimeout(() => {
    console.log('timer3')
}, 0);
console.log('the end');