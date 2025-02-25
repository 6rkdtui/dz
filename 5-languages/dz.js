let res = prompt('Выберите язык: EN, RU, DE, PT, JA');

switch (res){
    case 'EN':
        console.log('Hello'); 
        break;
    case 'RU':
        console.log('Здравствуйте'); 
        break; 
    case 'DE':
        console.log('Hallo'); 
        break;      
    case 'PT':
        console.log('Olá'); 
        break; 
    case 'JA':
        console.log('こんにちわ'); 
        break;
    default: 
        console.log('Такого языка нет в базе(');  
}
