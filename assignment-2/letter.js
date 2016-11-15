// letter.js

var chance = require('chance').Chance();

var wrap = require('word-wrap');

const first = ['DEAR', 'DELICIOUS', 'SMÖRGÅSBORD', 'SWEET'];

const second = ['GOURMÉ MEAL', 'FOODIE', 'SMÖRGÅSBORD', 'PUDDING'];

const adjectives = ['JUICY', 'SPICY', 'DELICIOUS', 'FINE', 'TENDER', 'CRUMBLY', 'CRISPY', 'SOFT', 'WARM', 'CRUNCHY', 'SMOOTH', 'SILKY', 'THICK', 'YUMMY', 'SCRUMPTIOUS', 'TOOTHSOME', 'LUSCIOUS', 'SMARRIG', 'CREAMY', 'STEAMING', 'SWEET', 'LOVEABLE', 'LOVESICK', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'UNSATISFIED', 'WISTFUL'];

const nouns = ['CAKE', 'FRUIT', 'CUPCAKE', 'APPLE', 'STEAK', 'BURGER', 'HOTDOG', 'ICECREAM', 'BBQ', 'BITTERBALLEN', 'PANCAKE', 'CURRY', 'MILKSHAKE', 'MUSTARD', 'PINEAPPLE', 'TUNA', 'SUSHI', 'SCENT', 'CREAMS', 'SPICES', 'DONUTS', 'MEALS', 'PASSIONFRUIT', 'SMOOTHNESS', 'CRIPSNESS', 'TENDERNESS', 'JUICINESS', 'SPETTEKAKA', 'SEMLA', ];

const adverbs = ['AFFECTIONATELY', 'ANXIOUSLY', 'ARDENTLY', 'AVIDLY', '´STARVINGLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'THIRSTILY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY'];

const verbs = ['EATS', 'ATTRACTS', 'CRAVES', 'CHERISHES', 'CONSUMES', 'DESIRES','HOLDS DEAR', 'HOPES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LIKES', 'LONGS FOR', 'LOVES', 'EAT UP', 'DOWNS', 'MUNCHES', 'PRIZES', 'SIGHS FOR', 'TEMPTS', 'THIRSTS FOR', 'TREASURES', 'WANTS', 'WISHES', 'WOOS', 'YEARNS FOR'];



function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index];
}

function maybe(array) {
	if (chance.bool()) {
		return choice(array);

	} else {
		return"";
	}	

	}

function short () {
	return choice (adjectives) [3] + ' ' + nouns [2] + '.';

}

function long () {
	return "MY " + maybe (adjectives) + ' ' + choice(nouns) + ' ' +
					maybe(adverbs) + ' ' + choice(verbs) + ' ' +
					'YOUR '  + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}

function mediumlong () {
	return "THEIR " + maybe (adjectives) + ' ' + choice(nouns) + ' ' +
					maybe(adverbs) + ' ' + choice(verbs) + ' ' +
					'HER '  + choice(nouns) + '. ';
}


function medium () {
	return "HIS " + choice(nouns) + ' ' +
					choice(verbs) + ' ' +
					'ITS '  + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}

 var text = "";

 console.log("\n\n\n\n\n\n");

for(var i = 0; i < 5; i++) {

	var c = choice(["long", "mediumlong", "medium", "short", ]);

	if(c == "long") {

		text += long();

	} if(c == "mediumlong") {

		text += mediumlong();

	} else if(c == "medium") {

		text += medium();
		
	}

  
}

var output = wrap(text, {"width" : 65});

console.log(output);

console.log("\n\n\n\n\n\n\n\n");