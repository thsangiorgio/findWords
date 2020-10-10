module.exports = (text) => {
	const words = text.toLowerCase().match(/(\w'?)+/g);
	const total = words
		? words.reduce(
				(accumulate, current) => (
					(accumulate[current] = (accumulate[current] || 0) + 1), accumulate
				),
				{}
		  )
		: [];
	return Object.keys(total)
		.sort((a, b) => total[b] - total[a])
		.slice(0, 3);
};
