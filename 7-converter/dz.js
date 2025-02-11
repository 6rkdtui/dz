function converter (sum, sourceCurrency, targetCurrency){
    const key = `${sourceCurrency}-${targetCurrency}`;

    const rubToDollar = 0.01;
    const dolToRubble = 97.81;
    const dolToEuro = 0.97;
    const eueoToRDollar = 1.04;
    const euroToRubble = 102.13;
    const rubToEuro = 0.009791;

    switch (key){
        case 'руб-доллар':
            console.log(`Примерно ${sum} рублей к долларам вернет ${rubToDollar * sum} $`);
            break;
        case 'доллар-руб':
            console.log(`Примерно ${sum} долларов к рублям вернет ${dolToRubble * sum} руб`);
            break;
        case 'доллар-евро':
            console.log(`Примерно ${sum} долларов к евро вернет ${dolToEuro * sum} евро`);
            break;
        case 'евро-доллар':
            console.log(`Примерно ${sum} евро к долларам вернет ${eueoToRDollar * sum} $`);
            break;
        case 'евро-руб':
            console.log(`Примерно ${sum} евро к рублям вернет ${euroToRubble * sum} руб`);
            break;
        case 'руб-евро':
            console.log(`Примерно ${sum} рублей к евро вернет ${rubToEuro * sum} евро`);
            break;
        default:
            console.log(null);
        
    }
}

console.log(converter (1000, 'доллар', 'евро'));