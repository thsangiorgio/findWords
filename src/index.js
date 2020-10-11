module.exports = (text) => {
	const words = text.toLowerCase().match(/[a-z']+/g);
	const wordsCount = words
		? words.reduce(
				(accumulate, current) => (
					(accumulate[current] = (accumulate[current] || 0) + 1), accumulate
				),
				{}
		  )
		: [];

	return Object.keys(wordsCount)
		.sort((a, b) => wordsCount[b] - wordsCount[a])
		.slice(0, 3);
};
