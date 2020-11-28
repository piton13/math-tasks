function getList(n) {
	if (n < 2) {
		throw new Error('input is not valid');
	}

	const res = [2];
	let number = 2;
	const isSimpleNumber = (num) => res.some((rec) => num % rec === 0);

	while (res.length < n) {
		number +=1;

		if (!isSimpleNumber(number)) {
			res.push(number);
		}
	}

	return res;
}

console.log('list of simple numbers: ', getList(10));
