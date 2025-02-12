const arrStrings = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterDate(arr){

    function CheckDayAndWeek (day, month, year, arr){
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
            const convertedDate = day + '-' + month + '-' + year;
            arr.push(convertedDate); 
        }
    }

    // массив, куда будем загонять валидные даты
    const validDates = []; 

    arr.forEach(date => {
        // проверка: длина строки 10 символов, 3 и 6 символы это '-'
        if (date.length === 10 && date[2] === '-' && date[5] === '-') {
            const day = Number(date.slice(0, 2));
            const month = Number(date.slice(3, 5));
            const year = Number(date.slice(6, 10));

            CheckDayAndWeek(day, month, year, validDates);

        } else if (date.length === 10 && date[2] === '/' && date[5] === '/') {
            const day = Number(date.slice(3, 5));
            const month = Number(date.slice(0, 2));
            const year = Number(date.slice(6, 10));

            CheckDayAndWeek(day, month, year, validDates);
        }     
    }
    )
    return validDates
}
console.log(filterDate(arrStrings));
