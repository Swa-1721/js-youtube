const name = "swa";
const repo="50";

console.log(name + repo);

console.log(`hello my name is ${name} and my repo count is ${repo} `);

const userName="swap-swa";
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.charAt(3));
console.log(userName.indexOf('w'));

const  newString = userName.substring(0,4);
console.log(newString);

const anotherString = userName.slice(-9,2);
console.log(anotherString);

const anotherUser = "  newuser";
console.log(anotherUser);
console.log(anotherUser.trim());

const url = "hhtps://swap.com/swa%15swap";

console.log(url.replace('%15','-'));
console.log(userName.split('-'));