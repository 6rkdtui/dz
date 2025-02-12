const card = '4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7';
console.log(card);

function checkCardLuna (str){
    let filterStr = str.replaceAll(' ', '');
    filterStr = filterStr.replaceAll('-', '');
    if (filterStr.length != 16){
        return false;
    } else {
        let sum = 0;
        let needDouble = true;
        for (let i = 0; i < 16; i +=1){
            let el = parseInt(filterStr[i], 10);
            if (needDouble){
                el *= 2;
                if (el > 9){
                    el -= 9;
                }  
            }
            sum += el;
            needDouble = !needDouble;
            }
        if (sum % 10 === 0){
            return true;
        } else{
            return false;
        }    
            
    }
}
    

console.log(checkCardLuna(card));