let num;

console.log(`while loop 1`);
num = 1;
while (num <= 5) {
    console.log(num);
}
console.log(`Done`);

console.log(`while loop 2`);
num = 6;
while (num <= 5) {
    console.log(num);
}
console.log(`Done`);

console.log(`do-while loop 1`);
num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);
console.log('Done');

console.log(`do-while loop 2`);
num = 6;
do {
    console.log(num);
    num++;
} while (num <= 5);
console.log('Done');