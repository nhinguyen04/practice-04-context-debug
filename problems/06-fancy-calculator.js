const {Calculator} = require("./02-calculator.js");

class FancyCalculator extends Calculator {
	constructor(total = 0) {
		super(total);
	}

	setTotal(newTotal) {
		this.total = newTotal;
		return this.total;
	}

	modulo(num) {
		const currentTotal = this.total;
		this.total = currentTotal % num;
		return this.total;
	}

	squared() {
		this.total *= this.total;
		return this.total;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
