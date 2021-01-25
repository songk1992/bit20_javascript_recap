const today = new Date();
console.log(today.toLocaleString());

const bday = new Date(2021, 1, 3, 1, 1, 30);
console.log(bday.toLocaleString());
console.log(bday.getFullYear());
console.log(bday.toLocaleTimeString());
console.log(bday.getMonth());
console.log(bday.getTime()); //타임스탬프

