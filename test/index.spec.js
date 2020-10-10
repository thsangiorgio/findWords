const topThreeWords = require("../src/index");
const { expect } = require("chai");
const Chance = require("chance");

describe("Top Three Words", () => {
	const chance = new Chance();
	describe("when the texts contain no word", () => {
		it("should return an empty array", () => {
			expect(topThreeWords("     ")).to.deep.equal([]);
		});
	});

	describe("when the texts contain less than four words", () => {
		const wordsArray = chance.n(chance.word, chance.natural({ min: 1, max: 3 }));
		const wordsString = wordsArray.join(" ");

		it("should return an array with those two words", () => {
			expect(topThreeWords(wordsString)).to.deep.equal(wordsArray);
		});
	});

	describe("when the texts contain more than three words", () => {
		describe("scenario 1", () => {
			const scenario1 = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a 
lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on 
Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`;

			it("should return expected array", () => {
				expect(topThreeWords(scenario1)).to.deep.equal(["a", "of", "on"]);
			});
		});

		describe("scenario 2", () => {
			const scenario2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";

			it("should return expected array", () => {
				expect(topThreeWords(scenario2)).to.deep.equal(["e", "ddd", "aa"]);
			});
		});

		describe("scenario 3", () => {
			const scenario3 = " //wont won't won't";

			it("should return expected array", () => {
				expect(topThreeWords(scenario3)).to.deep.equal(["won't", "wont"]);
			});
		});
	});
});
