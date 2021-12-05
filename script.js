    const moto = ['This day starts good!', 'Oh, where is my coffee?', 'Are you sleepy?', 'Is it sunny today?', 'Your fish friends are hungry!', 'Where are your slippers?', 'Which shoes are you going to wear today?'];
    const foodReq = ['Have an omlett for breakfast!', 'Have a brownie in the afternoon!', 'Try something new for dinner!', 'Get out and about!', 'Let\'s do some sports today!', 'Check the recipe book for a new recipe!'];
    const joke = ['A man walks into a lawyer\'s office and asks, \"How much do you charge?\" The lawyer says, \"$5,000 for three questions.\"\"Wow, that\'s pretty expensive, isn\'t it? \"The man asks.\"Yes,\" says the lawyer. \"Now, what\'s your third question?\"', 
    'Before Mount Everest was discovered, what was the highest mountain in the world? Answer: Mount Everest was still the highest even though it had not been discovered.',
    'What did the blonde say after glimpsing a box of Cheerios? \"OMG! Donut seeds!\"', 
    'One windmill asked another: "What\'s you\'re favorite music?The other one replied, "I\'m a big metal fan.\"',
    'What\'s the best thing about Switzerland? I don\'t know, but the flag is a big plus.',
    'Did you hear about the new restaurant called Karma? There\'s no menu: You get what you deserve.',
    'Why don\'t scientists trust atoms? Because they make up everything?'];

    
function generateNumber(num) {
        return Math.floor(Math.random()*num.length)};

function getMessage(num) {
return num[generateNumber(num)];
}

function getFullMessage(moto, foodReq, joke) {
return getMessage(moto) + " " + getMessage(foodReq) + " " + getMessage(joke);
}

console.log(getFullMessage(moto, foodReq, joke));