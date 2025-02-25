const parameters = {
    search: "Вася", 
    take: 10
}

function createQuery (object){
    let strForQuery = '';
    for (const key in object){
        strForQuery = `${strForQuery}&${key}=${object[key]}`;
    }
    strForQuery = strForQuery.replace('&','');
    return strForQuery;
}

console.log(createQuery(parameters));
