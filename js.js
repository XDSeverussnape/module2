let UserInput,
Numbers = [],
total = 0;

const p = document.getElementById("p");


while(UserInput !== null) {
  UserInput = prompt('Введите любое число');
 Numbers.push(parseFloat(UserInput));
}
Numbers.pop();


for (i=0; i < Numbers.length; i++) {
  total = total + Numbers[i];
}
p.innerHTML = `Общая сумма чисел равна ${total}`;