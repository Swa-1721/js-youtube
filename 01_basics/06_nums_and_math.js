const number = 2;

console.log(number.toString());
console.log(number.toPrecision(5));

const balance = 100000000;
console.log(balance.toLocaleString()); // us based output 
console.log(balance.toLocaleString('en-IN')); // India basaed output


//*******************************Maths****************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(5.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.9));
console.log(Math.max(5,9,8,1,23,0.5));

console.log(Math.random()*10+1);


const max =10;
const min=1;
console.log(Math.floor(Math.random()*(max-min+1))+min)


