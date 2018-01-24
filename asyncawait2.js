async function step1() {
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

async function step2(input) {
	return new Promise((resolve, reject) => {
		const result = "step2 is done with " + input;
		if (Math.random() < 0.3) {
			reject("error at step2", null);
		} else {
			resolve(result);
		}
	});
}

async function step3(input) {
	return new Promise((resolve, reject) => {
		const result = "step3 is done with " + input;
		if (Math.random() < 0.3) {
			reject("error at step3", null);
		} else {
			resolve(result);
		}
	});
}

async function main() {
	try {
		let value1 = await step1();
		console.log(value1);
		let value2 = await step2(value1);
		console.log(value2);
		let value3 = await step3(value2);
		console.log(value3);
	} catch (e) { // any reject is caught here
		console.log(e);
	}
}

main();