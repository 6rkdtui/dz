const numbers = [5, 3, 8, 1, 2];

function sortArray(array, option = 'по возрастанию') {
    const compare = (a, b, option) => {
        if (option === 'по возрастанию') {
            return a > b;
        } else if (option === 'по убыванию') {
            return a < b;
        }
        console.log("Некорректный параметр сортировки. Используйте 'по возрастанию' или 'по убыванию'.");
    };

    const sortedArray = [...array];

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (compare(sortedArray[j], sortedArray[j + 1], option)) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }
    return sortedArray;
}



console.log(sortArray(numbers, 'по возрастанию'));  // [1, 2, 3, 5, 8]
console.log(sortArray(numbers, 'по убыванию')); // [8, 5, 3, 2, 1]