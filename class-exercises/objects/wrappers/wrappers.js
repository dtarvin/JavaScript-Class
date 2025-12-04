let s1 = "hello";
let s2 = new String("hello");

console.log(typeof s1); // "string"
console.log(typeof s2); // "object"   

console.log(s1 == s2);  // true
console.log(s1 === s2); // false
console.log(s2.valueOf() === s1); // true
console.log(s2.toString() === s1); // true
console.log(s2 instanceof String); // true
console.log(s1 instanceof String); // false
console.log(Object.prototype.toString.call(s1)); // [object String] // [object String]

s2.customProperty = "I am a custom property";
console.log(s2.customProperty); // "I am a custom property" 
console.log(s1.customProperty); // undefined
console.log(s2.length); // 5
console.log(s1.length); // 5
console.log(s2.charAt(0)); // "h"
console.log(s1.charAt(0)); // "h"
console.log(s2.toUpperCase()); // "HELLO"
console.log(s1.toUpperCase()); // "HELLO"
console.log(s2.includes("ell")); // true
console.log(s1.includes("ell")); // true
console.log(s2 === s2.valueOf()); // false
console.log(s1 === s1.valueOf()); // true
console.log(s2.concat(" world")); // "hello world"
console.log(s1.concat(" world")); // "hello world"
console.log(s2.split("e")); // [ 'h', 'llo' ]
console.log(s1.split("e")); // [ 'h', 'llo' ]
console.log(Object.keys(s2)); // [ '0', '1', '2', '3', '4', 'customProperty' ]
console.log(Object.keys(s1)); // []
console.log(JSON.stringify(s2)); // "\"hello\""
console.log(JSON.stringify(s1)); // "\"hello\""
console.log(s2 instanceof Object); // true
console.log(s1 instanceof Object); // false
console.log(Object.getPrototypeOf(s2) === String.prototype); // true
console.log(Object.getPrototypeOf(s1) === String.prototype); // false
console.log(String.prototype.isPrototypeOf(s2)); // true
console.log(String.prototype.isPrototypeOf(s1)); // false
console.log(s2[0]); // "h"
console.log(s1[0]); // "h"
console.log(s2.lastIndexOf("l")); // 3
console.log(s1.lastIndexOf("l")); // 3
console.log(s2.startsWith("he")); // true
console.log(s1.startsWith("he")); // true
console.log(s2.endsWith("lo")); // true
console.log(s1.endsWith("lo")); // true
console.log(s2.repeat(2)); // "hellohello"
console.log(s1.repeat(2)); // "hellohello"
console.log(s2.trim()); // "hello"
console.log(s1.trim()); // "hello"
console.log(s2.search("e")); // 1
console.log(s1.search("e")); // 1
console.log(s2.slice(1, 4)); // "ell"
console.log(s1.slice(1, 4)); // "ell"
console.log(s2.substr(1, 3)); // "ell"
console.log(s1.substr(1, 3));
  // "ell"  
console.log(s2.indexOf("l")); // 2
console.log(s1.indexOf("l")); // 2  
console.log(s2.match(/l+/g)); // [ 'll', 'l' ]
console.log(s1.match(/l+/g)); // [ 'll', 'l' ]
console.log(s2.replace("l", "L")); // "heLlo"
console.log(s1.replace("l", "L")); // "heLlo"
console.log(s2.localeCompare("hello")); // 0
console.log(s1.localeCompare("hello")); // 0
console.log(s2.normalize() === s1.normalize()); // true   
console.log(s2.valueOf()); // "hello"
console.log(s1.valueOf()); // "hello" 
console.log(s2.toString()); // "hello"
console.log(s1.toString()); // "hello"
console.log(s2.charCodeAt(0)); // 104
console.log(s1.charCodeAt(0)); // 104
console.log([...s2]); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log([...s1]); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(s2[Symbol.iterator]() === s1[Symbol.iterator]()); // false
console.log(Array.from(s2)); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from(s1)); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(s2.includes("z")); // false
console.log(s1.includes("z")); // false
console.log(s2.localeCompare("world")); // negative number
console.log(s1.localeCompare("world")); // negative number
console.log(s2.trimStart() === s1.trimStart()); // true
console.log(s2.trimEnd() === s1.trimEnd()); // true
console.log(s2.padStart(10, "*")); // "*****hello"
console.log(s1.padStart(10, "*")); // "*****hello"
console.log(s2.padEnd(10, "*")); // "hello*****"
console.log(s1.padEnd(10, "*")); // "hello*****"  
console.log(s2.raw`Raw string\n`); // "Raw string\\n"
console.log(String.raw`Raw string\n`); // "Raw string\\n" 
console.log(s1.raw`Raw string\n`); // "Raw string\n"
console.log(Object.is(s2, s2.valueOf())); // false
console.log(Object.is(s1, s1.valueOf())); // true
console.log(s2.constructor === String); // true
console.log(s1.constructor === String); // false
console.log(s2.toLocaleUpperCase()); // "HELLO"
console.log(s1.toLocaleUpperCase()); // "HELLO"
console.log(s2.toLocaleLowerCase()); // "hello"
console.log(s1.toLocaleLowerCase()); // "hello"
console.log(s2.matchAll(/l/g)); // [object String Iterator]
console.log(s1.matchAll(/l/g)); // [object String Iterator]
for (const match of s2.matchAll(/l/g)) {
  console.log(match);
} 
for (const match of s1.matchAll(/l/g)) {
  console.log(match);
}
console.log(s2.normalize('NFD')); // "hello"
console.log(s1.normalize('NFD')); // "hello"
console.log(s2.endsWith("lo", 5)); // true
console.log(s1.endsWith("lo", 5)); // true
console.log(s2.startsWith("he", 0)); // true
console.log(s1.startsWith("he", 0));
  // true
console.log(s2.concat()); // "hello"
console.log(s1.concat()); // "hello"
console.log(s2.repeat(0)); // ""
console.log(s1.repeat(0)); // ""
console.log(s2.split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(s1.split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(s2.substr(-4, 2)); // "el"
console.log(s1.substr(-4, 2)); // "el"
console.log(s2.slice(-4, -1)); // "ell"
console.log(s1.slice(-4, -1)); // "ell"
console.log(s2.charAt(s2.length - 1)); // "o"
console.log(s1.charAt(s1.length - 1)); // "o"
console.log(s2.lastIndexOf("o", 4)); // 4
console.log(s1.lastIndexOf("o", 4)); // 4
console.log(s2.indexOf("h", 0)); // 0
console.log(s1.indexOf("h", 0)); // 0
console.log(s2.search(/l+/)); // 2
console.log(s1.search(/l+/)); // 2
console.log(s2.replace(/l/g, "L")); // "heLLLo"
console.log(s1.replace(/l/g, "L")); // "heLLLo"
console.log(s2.valueOf() === s2.toString()); // true
console.log(s1.valueOf() === s1.toString()); // true
console.log(Object.entries(s2)); // [ [ '0', 'h' ], [ '1', 'e' ], [ '2', 'l' ], [ '3', 'l' ], [ '4', 'o' ], [ 'customProperty', 'I am a custom property' ] ]
console.log(Object.entries(s1)); // []
console.log(s2[Symbol.toStringTag]); // "String"
console.log(s1[Symbol.toStringTag]); // undefined
console.log(Object.getOwnPropertyNames(s2)); // [ '0', '1', '2', '3', '4', 'length', 'customProperty' ]
console.log(Object.getOwnPropertyNames(s1)); // [ 'length' ]  
console.log(Object.getOwnPropertyDescriptors(s2));
/*
{
  '0': { value: 'h', writable: false, enumerable: true, configurable: false },
  '1': { value: 'e', writable: false, enumerable: true, configurable: false },
  '2': { value: 'l', writable: false, enumerable: true, configurable: false },    
  '3': { value: 'l', writable: false, enumerable: true, configurable: false },
  '4': { value: 'o', writable: false, enumerable: true, configurable: false },
  length: { value: 5, writable: false, enumerable: false, configurable: false },  
  customProperty: { value: 'I am a custom property', writable: true, enumerable: true, configurable: true }
}
*/
console.log(Object.getOwnPropertyDescriptors(s1));
/*
{
  length: { value: 5, writable: false, enumerable: false, configurable: false }
}
*/  console.log(Object.freeze(s2) === s2); // true
console.log(Object.freeze(s1) === s1); // true  console.log(Object.isFrozen(s2)); // true
console.log(Object.isFrozen(s1)); // false  console.log(Object.seal(s2) === s2); // true
console.log(Object.seal(s1) === s1); // true  console.log(Object.isSealed(s2)); // true
console.log(Object.isSealed(s1)); // false  console.log(Object.preventExtensions(s2) === s2); // true
console.log(Object.preventExtensions(s1) === s1); // true  console.log(Object.isExtensible(s2)); // false
console.log(Object.isExtensible(s1)); // false  console.log(Object.defineProperty(s2, 'customProperty', { writable: false })); // String {"hello", customProperty: "I am a custom property"}
console.log(Object.getOwnPropertyDescriptor(s2, 'customProperty'));
/*    
{ value: 'I am a custom property', writable: false, enumerable: true, configurable: true }
*/
console.log(Object.defineProperty(s1, 'newProp', { value: 42 })); // String {"hello"} 
console.log(Object.getOwnPropertyDescriptor(s1, 'newProp'));
/*
{ value: 42, writable: false, enumerable: false, configurable: false }
*/
console.log(s1.newProp); // 42  console.log(s2.newProp); // undefined 
console.log(Object.keys(s2)); // [ '0', '1', '2', '3', '4', 'customProperty' ]
console.log(Object.keys(s1)); // [] console.log(Object.values(s2)); // [ 'h', 'e', 'l', 'l', 'o', 'I am a custom property' ]
console.log(Object.values(s1)); // [] console.log(Object.freeze(s2).customProperty); // "I am a custom property"
console.log(Object.seal(s2).customProperty); // "I am a custom property"  console.log(Object.preventExtensions(s2).customProperty); // "I am a custom property"
console.log(Object.freeze(s1).newProp); // 42
console.log(Object.seal(s1).newProp); // 42
console.log(Object.preventExtensions(s1).newProp); // 42  
console.log(s2 instanceof Object); // true
console.log(s1 instanceof Object); // false
console.log(Object.prototype.toString.call(s2)); // [object String]
console.log(Object.prototype.toString.call(s1)); // [object String]
console.log(String.prototype.isPrototypeOf(s2)); // true
console.log(String.prototype.isPrototypeOf(s1)); // false
console.log(Object.getPrototypeOf(s2) === String.prototype); // true
console.log(Object.getPrototypeOf(s1) === String.prototype); // false
console.log(s2.constructor === String); // true
console.log(s1.constructor === String); // false
console.log(s2 + " world"); // "hello world"
console.log(s1 + " world"); // "hello world"
console.log(s2[Symbol.iterator]() === s2[Symbol.iterator]()); // false  
console.log(s1[Symbol.iterator]() === s1[Symbol.iterator]()); // false  
console.log(s2[Symbol.iterator]().next()); // { value: 'h', done: false }
console.log(s1[Symbol.iterator]().next()); // { value: 'h', done: false }
console.log(typeof s2[Symbol.iterator]()); // "object"
console.log(typeof s1[Symbol.iterator]()); // "object"
console.log(Object.getOwnPropertySymbols(s2)); // []
console.log(Object.getOwnPropertySymbols(s1)); // []
console.log(Reflect.ownKeys(s2)); // [ '0', '1', '2', '3', '4', 'length', 'customProperty' ]
console.log(Reflect.ownKeys(s1)); // [ 'length', 'newProp' ]
console.log(Reflect.get(s2, 'customProperty')); // "I am a custom property"
console.log(Reflect.get(s1, 'newProp')); // 42
console.log(Reflect.has(s2, 'customProperty')); // true
console.log(Reflect.has(s1, 'newProp')); // true
console.log(Reflect.set(s2, 'customProperty', 'New Value')); // true
console.log(Reflect.get(s2, 'customProperty'));
// "New Value"
console.log(Reflect.set(s1, 'newProp', 100)); // false
console.log(Reflect.get(s1, 'newProp')); // 42  
console.log(JSON.stringify(s2)); // "\"hello\""
console.log(JSON.stringify(s1)); // "\"hello\""
console.log(s2.toString() === String(s2)); // true
console.log(s1.toString() === String(s1)); // true
console.log(s2.valueOf() === String(s2)); // true
console.log(s1.valueOf() === String(s1)); // true
console.log(s2.concat(" everyone")); // "hello everyone"
console.log(s1.concat(" everyone")); // "hello everyone"
console.log(s2.trim() === s1.trim()); // true
console.log(s2.toUpperCase() === s1.toUpperCase());
// true
console.log(s2.toLowerCase() === s1.toLowerCase()); // true
console.log(s2.split("l").length === s1.split("l").length); // true
console.log(s2.match(/l/g).length === s1.match(/l/g).length); // true
console.log(s2.replace("l", "L") === s1.replace("l", "L")); // true
console.log(s2.includes("e") === s1.includes("e")); // true
console.log(s2.startsWith("he") === s1.startsWith("he"));
console.log(s2.endsWith("lo") === s1.endsWith("lo"));
// true
console.log(s2.repeat(3) === s1.repeat(3)); // true
console.log(s2.padStart(8, "-") === s1.padStart(8, "-")); // true
console.log(s2.padEnd(8, "-") === s1.padEnd(8, "-")); // true 
console.log(s2.search("e") === s1.search("e")); // true
console.log(s2.indexOf("l") === s1.indexOf("l")); // true
console.log(s2.lastIndexOf("l") === s1.lastIndexOf("l")); // true 
console.log(s2.charAt(2) === s1.charAt(2)); // true
console.log(s2.charCodeAt(2) === s1.charCodeAt(2)); // true 
console.log([...s2].join("") === [...s1].join("")); // true
console.log(Array.from(s2).join("") === Array.from(s1).join("")); // true
console.log(s2.matchAll(/l/g).next().value[0] === s1.matchAll(/l/g).next().value[0]); // true
console.log(s2.normalize() === s1.normalize()); // true
console.log(s2.raw`Test\n` === String.raw`Test\n`); // true
console.log(s1.raw`Test\n` === String.raw`Test\n`); // false
console.log(Object.isExtensible(s2) === Object.isExtensible(s1)); // false
console.log(Object.isSealed(s2) === Object.isSealed(s1)); // false
console.log(Object.isFrozen(s2) === Object.isFrozen(s1)); // false
console.log(Object.getPrototypeOf(s2) === Object.getPrototypeOf(s1)); // false
console.log(String.prototype.toString.call(s2) === String.prototype.toString.call(s1)); // true
console.log(String.prototype.valueOf.call(s2) === String.prototype.valueOf.call(s1)); // true
console.log(Object.prototype.isPrototypeOf.call(String.prototype, s2) === Object.prototype.isPrototypeOf.call(String.prototype, s1)); // false
console.log(s2 instanceof String === s1 instanceof String); // false
console.log(Object.getOwnPropertyNames(s2).length === Object.getOwnPropertyNames(s1).length); // false
console.log(Object.getOwnPropertyDescriptors(s2).length === Object.getOwnPropertyDescriptors(s1).length); // false
console.log(Reflect.ownKeys(s2).length === Reflect.ownKeys(s1).length); // false
console.log(JSON.stringify(s2) === JSON.stringify(s1)); // true
console.log(s2.toString() === s1.toString()); // true
console.log(s2.valueOf() === s1.valueOf()); // true
console.log(s2.concat("") === s1.concat("")); // true
console.log(s2.trim() === s1.trim()); // true
console.log(s2.toUpperCase() === s1.toUpperCase()); // true
console.log(s2.toLowerCase() === s1.toLowerCase());

console.log(s2.split("") .join("") === s1.split("") .join("")); // true
console.log(s2.match(/l/g).length === s1.match(/l/g).length); // true
console.log(s2.replace(/l/g, "L") === s1.replace(/l/g, "L")); // true
console.log(s2.includes("e") === s1.includes("e")); // true
console.log(s2.startsWith("he") === s1.startsWith("he")); // true
console.log(s2.endsWith("lo") === s1.endsWith("lo")); // true
console.log(s2.repeat(2) === s1.repeat(2)); // true