const sourceArr = [3, 6, 9, 2];
console.log(sourceArr);

// функция удаления элементов 
function deleteElement (el){
    return el > 5
}

// функция филтрация массива
function filterArray (arr, fn){
    console.log(arr);
    for (let i = arr.length - 1; i > 0 ; i--){ 
        if (fn(arr[i])){
            // console.log(arr[i]);
            arr.splice(i, 1);
        } 
    }
    return arr;
} 

const filterArr = filterArray(sourceArr, deleteElement);
console.log(filterArr);






