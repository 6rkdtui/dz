function converter (sum, sourceCurrency, targetCurrency){
    const key = `${sourceCurrency}-${targetCurrency}`;

    switch (key){
        case 'руб-доллар':
            console.log(`Примерно ${sum} рублей к долларам вернет ${0.01*sum} $`);
            break;
        case 'доллар-руб':
            console.log(`Примерно ${sum} долларов к рублям вернет ${97.81*sum} руб`);
            break;
        case 'доллар-евро':
            console.log(`Примерно ${sum} долларов к евро вернет ${0.97*sum} евро`);
            break;
        case 'евро-доллар':
            console.log(`Примерно ${sum} евро к долларам вернет ${1.04*sum} $`);
            break;
        case 'евро-руб':
            console.log(`Примерно ${sum} евро к рублям вернет ${102.13*sum} руб`);
            break;
        case 'руб-евро':
            console.log(`Примерно ${sum} рублей к евро вернет ${0.009791*sum} евро`);
            break;
        default:
            console.log(null);
        
    }
}

console.log(converter (1000, 'доллар', 'евро'));