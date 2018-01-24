function step1(callback) {
	// assume a time-consuming task is done here
	// at the completion of this step, we get the result
	const result = "step1 is done";
	if (Math.random() < 0.3) {
		// an error has occurred, result is meaningless
		return callback("error at step1", null);
	} else {
		return callback(null, result);
	}
}

function step2(input, callback) {
	const result = "step2 is done with " + input;
	if (Math.random() < 0.3) {
		return callback("error at step2", null);
	} else {
		return callback(null, result);
	}
}

function step3(input, callback) {
	const result = "step3 is done with " + input;
	if (Math.random() < 0.3) {
		return callback("error at step3", null);
	} else {
		return callback(null, result);
	}
}


function main() {
	// You can move to the next step only if the current step is successful
	// step1 -> step2 -> step3
	// people call this "CALLBACK HELL!"
	step1((error, data1) => {
		if (error) {
			console.log(error);
			return; // cannot move to the next step
		}
		console.log('step1 completed successfully =>', data1);

		step2(data1, (error, data2) => {
			if (error) {
				console.log(error);
				return; // cannot move to the next step
			}
			console.log('step2 completed successfully =>', data2);

			step3(data2, (error, data3) => {
				if (error) {
					console.log(error);
					return; // cannot move to the next step
				}
				console.log('step3 completed successfully =>', data3);
			});
		});
	});
}

main();