const table = [
	['A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'a', 'b', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'a', 'b', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'c', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'c', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'a', 'x', 'b', 'c', 'C', 'd', 'c', 'b', 'F', 'A', 'a', 'x', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'b', 'b', 'c', 'C', 'd', 'e', 'a', 'a', 'A', 'x', 'b', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'c', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'c', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
	['A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F', 'A', 'x', 'a', 'b', 'c', 'C', 'd', 'e', 'f', 'F'],
];
const inputWord = 'Aaabc';
const inputWordArr = inputWord.split('');
const letterPositionsMap = {};

const setLetterPositions = () => {
	Array.from((new Set(inputWordArr)).values()).forEach((value) => {
		letterPositionsMap[value] = [];
	});

	table.forEach((item, indY) => {
		item.forEach((record, indX) => {
			if (letterPositionsMap[record]) {
				letterPositionsMap[record].push({
					x: indX,
					y: indY,
				});
			}
		});
	});
};

const matchElements = (aPoints, bPoints) => {
	const linkedElements = [];
	aPoints.forEach((elA) => {
		bPoints.forEach((elB) => {
			if(elB.y === elA.y && (elB.x === elA.x - 1 || elB.x === elA.x + 1)) {
				linkedElements.push([elA, elB]);
			}
			if(elB.x === elA.x && (elB.y === elA.y - 1 || elB.y === elA.y + 1)) {
				linkedElements.push([elA, elB]);
			}
		});
	});
	return linkedElements;
};

const buildSequences = () => {
	inputWordArr.forEach((el, ind, arr) => {
		const pairKey = `${el}${arr[ind + 1]}`;
		if (ind + 1 === arr.length) { return; }
		if (!letterPositionsMap[pairKey]) {
			letterPositionsMap[pairKey] = [];
		}
		const matchedElements = matchElements(letterPositionsMap[el], letterPositionsMap[`${arr[ind + 1]}`]);
		if (matchedElements.length) {
			letterPositionsMap[pairKey] = matchedElements;
		}
	});
};

const addNextDotToPath = (arr, nextSequence) => {
	const nextDots = letterPositionsMap[nextSequence];
	const result = [];
	arr.forEach((el) => {
		const lastItem = el[el.length - 1];
		const nextArrow = nextDots.filter((el2) => {
			return el2[0].x === lastItem.x && el2[0].y === lastItem.y;
		});
		const nextArrowLastElements = nextArrow.map((el3) => el3[1]);

		nextArrowLastElements.forEach((el4) => {
			if(!el.some((el5) => el5.x === el4.x && el5.y === el4.y)) {
				result.push([...el, el4]);
			};
		});
	});

	return result;
};

const buildPaths = () => {
	const res = inputWordArr.reduce((acc, el, ind, arr) => {
		if (ind < 2) { return acc; }
		if (ind + 1 > arr.length) { return acc; }

		if (!acc.dots.length) { return acc; }

		acc.word += el;
		acc.dots = addNextDotToPath(acc.dots, acc.word.slice(-2));

		return acc;
	}, { word: inputWord.slice(0, 2), dots: letterPositionsMap[inputWord.slice(0, 2)] });

	if (res.word === inputWord) {
		console.log('Word exists on the board. Possible paths: ', JSON.stringify(res.dots));
	} else {
		console.log('Word does not exist on the board');
	}
};

setLetterPositions();
buildSequences();
buildPaths();
