const mixedMessage = {
    array1 : ['This day starts good!', 'Oh, where is my coffee?', 'Are you sleepy?', 'Is it sunny today?', 'Your fish friends are hungry!', 'Where are your slippers?', 'Which shoes are you going to wear today?'],
    array2 : ['Have an omlett for breakfast!', 'Have a brownie in the afternoon!', 'Try something new for dinner!', 'Get out and about!', 'Let\'s do some sports today!', 'Check the recipe book for a new recipe!'],
    array3 : ['A man walks into a lawyer\'s office and asks, \"How much do you charge?\" The lawyer says, \"$5,000 for three questions.\"\"Wow, that\'s pretty expensive, isn\'t it? \"The man asks.\"Yes,\" says the lawyer. \"Now, what\'s your third question?\"', 
    'Before Mount Everest was discovered, what was the highest mountain in the world? Answer: Mount Everest was still the highest even though it had not been discovered.',
    'What did the blonde say after glimpsing a box of Cheerios? \"OMG! Donut seeds!\"', 
    'One windmill asked another: "What\'s you\'re favorite music?The other one replied, "I\'m a big metal fan.\"',
    'What\'s the best thing about Switzerland? I don\'t know, but the flag is a big plus.',
    'Did you hear about the new restaurant called Karma? There\'s no menu: You get what you deserve.',
    'Why don\'t scientists trust atoms? Because they make up everything?']
    };
    
    function generateNumber(num) {
        return Math.floor(Math.random()*num)};

    let personalMessage = [];

    for (let prop in mixedMessage) {
        let optionIdx = generateNumber(mixedMessage[prop].length)

        switch(prop) {
            case 'array1':
                personalMessage.push(`"${mixedMessage[prop][optionIdx]}"`)
                break
            case 'array2':
                personalMessage.push(`"${mixedMessage[prop][optionIdx]}"`)
                break
            case 'array3':
                personalMessage.push(`"${mixedMessage[prop][optionIdx]}"`)
                break
            default:
                personalMessage.push(`There isn't enough info`)
        }
        
    }

    function formatMessage(mess) {
        const readyToRead = personalMessage.join('\n');
        console.log(readyToRead)
    }

    formatMessage(personalMessage);