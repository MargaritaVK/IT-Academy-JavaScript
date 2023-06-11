const startDate = new Date (Date.UTC (2000, 1, 1));
const endDate = new Date (Date.now ());
let count = 0;

for (let year=startDate.getFullYear(); year<=endDate.getFullYear(); year++) {
    for (let month=0; month<12; month++) {
        let date = new Date (year, month, 13);
        if (date > endDate) {
            break;
        }
        if (date.getDay() == 5) {
            count ++;
        }
    }
}

console.log(count);