// encoding data in base64 encoding is a possibility in javascript

const _name = 'Jonathan';

const encodedName = Buffer.from(_name).toString('base64');

console.log(encodedName);

console.log(Buffer.from(encodedName, 'base64').toString());

console.log(_name.charCodeAt());
console.log('V'.charCodeAt());
