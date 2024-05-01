// первый пункт
const row1 = prompt('Please fill the first row: ');
const row2 = prompt('Please fill the second row: ');
const row3 = prompt('Please fll the third row: ');
alert(`Result: ${row1} ${row2} ${row3}`);

// второй пункт
let userNumber = prompt('Plase write any number that contains 5 characters');
let formattedNumber = '';

for(let i = 0; i < userNumber.length; i++){
    formattedNumber += `${userNumber[i]} `;
}
alert(formattedNumber);