console.log('Code start');
process.nextTick(() => {
  console.log('process.nextTick 1');  
});
Promise.resolve().then(() => {
  console.log('Promise.resolve.then 1');
});
process.nextTick(() => {
  console.log('process.nextTick 2');
  process.nextTick(() => {
    console.log('process.nextTick inside process.nextTick');
  });
});
Promise.resolve().then(() => {
  console.log('Promise.resolve.then 2');
  Promise.resolve().then(() => {
    console.log('Promise.resolve.then inside Promise.resolve.then');
  });
  process.nextTick(() => {
    console.log('process.nextTick inside Promise.resolve.then');
  });
});
process.nextTick(() => {
  console.log('process.nextTick 3');
});
Promise.resolve().then(() => {
  console.log('Promise.resolve.then 3');
});
console.log('Code end');

// 1st - line 1 - console.log(Code start) - executes immediately
// 2nd line 2- process.nextTick - stores CB console.log('process.nextTick 1') line 3 in Microtask queue
// 3rd line 5 - Promise.resolve.then - stores CB console.log('Promise.resolve.then 1') line 6 in Promise queue
// 4th line 8 - process.nextTick - stores CB console.log('process.nextTick 2') line 9 in Microtask queue
// 5th line 8 - same process.nextTick - stores CB process.nextTick line 10 in Microtask queue
// 6th line 14 - Promise.resolve.then - stores CB console.log('Promise.resolve.then 2') line 15 in Promise queue
// 7th line 14 - same Promise.resolve.then - stores CB Promise.resolve.then line 16 in Promise queue
// 8th line 14 - same Promise.resolve.then - stores CB process.nextTick line 19 in Microtask queue
// 9th line 23 - process.nextTick - stores CB console.log('process.nextTick 3') line 24 in Microtask queue
// 10th line 26 - Promise.resolve.then - stores CB console.log('Promise.resolve.then 3') line 27 in Promise queue
// 11th line 29 - console.log('Code end') - executes immediately
// 12th - start Microtask Queue
// 13th - CB console.log('process.nextTick 1') executes
// 14th - CB console.log('process.nextTick 2') executes
// 15th - CB process.nextTick stores CB console.log('process.nextTick inside process.nextTick') in Microtask queue
// 16th - CB console.log('process.nextTick 3') executes
// 17th - CB console.log('process.nextTick inside process.nextTick') executes
// 18th - start Promise queue
// 19th - CB console.log('Promise.resolve.then 1') executes
// 20th - CB console.log('Promise.resolve.then 2') executes
// 21st - CB Promise.resolve.then stores CB console.log('Promise.resolve.then inside Promise.resolve.then') in Promise queue
// 22nd - CB process.nextTick stores CB console.log('process.nextTick inside Promise.resolve.then') in Microtask queue
// 23rd - CB console.log('Promise.resolve.then 3') executes
// 24th - CB console.log('Promise.resolve.then inside Promise.resolve.then') executes
// 25th - control back to Microtask queue
// 26th - CB console.log('process.nextTick inside Promise.resolve.then') executes

// Microtask queue
// // CB - console.log('process.nextTick 1')
// // CB - console.log('process.nextTick 2')
// // CB - process.nextTick line 10
// // CB - console.log('process.nextTick 3')
// // CB - console.log('process.nextTick inside process.nextTick')
// CB - console.log('process.nextTick inside Promise.resolve.then')


// Promise queue
// // CB - console.log('Promise.resolve.then 1')
// // CB - console.log('Promise.resolve.then 2')
// // CB - Promise.resolve.then line 16
// // CB - process.nextTick line 19
// // CB - console.log('Promise.resolve.then 3')
// // CB - console.log('Promise.resolve.then inside Promise.resolve.then')


// console
// Code start
// Code end
// process.nextTick 1
// process.nextTick 2
// process.nextTick 3
// process.nextTick inside process.nextTick
// Promise.resolve.then 1
// Promise.resolve.then 2
// Promise.resolve.then 3
// Promise.resolve.then inside Promise.resolve.then
// process.nextTick inside Promise.resolve.then