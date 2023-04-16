// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців
const DATE = {
    day: 15,
    month: 6,
    year: 2011
}
const userInput = parseInt(prompt('Enter a month count: ', '0'))
const getYearInNMonth = ({month, year}, n) => {
    let totalMonth = (month - 1) + n;
    let yearsToAdd = Math.floor(totalMonth / 12)
    let currentYears = year + yearsToAdd;
    let currentMonth = (totalMonth % 12) + 1;
    return {currentYears, currentMonth}
}

const {currentYears, currentMonth} = getYearInNMonth(DATE, userInput)



document.write(`Now ${DATE.year} year and ${DATE.month} month.
<br>After ${userInput} month will be: ${currentYears} - year, ${currentMonth} - month`)