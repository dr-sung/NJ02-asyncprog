function step1() {
	return new Promise((resolve, reject) => {
		const result = "step1 is done";
		if (Math.random() < 0.3) {
			// an error has occurred, result is meaningless
			reject("error at step1");
		} else {
			resolve(result);
		}
	});
}

function step2(input) {
	return new Promise((resolve, reject) => {
		const result = "step2 is done with " + input;
		if (Math.random() < 0.3) {
			reject("error at step2", null);
		} else {
			resolve(result);
		}
	});
}

function step3(input) {
	return new Promise((resolve, reject) => {
		const result = "step3 is done with " + input;
		if (Math.random() < 0.3) {
			reject("error at step3", null);
		} else {
			resolve(result);
		}
	});
}


function main() {
	// people call this "PROMISE HEAVEN"
	step1() // one single result is passed to next in chain
		.then(step2)
		.then(step3)
		.then(result => console.log(result)) // step3 result
		.catch(error => console.log(error));
}

main();