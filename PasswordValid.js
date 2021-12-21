let myRegexp = /^(\d{4}|\d{6})$/;
console.log(myRegexp.test(123));
console.log(myRegexp.test(12345));
console.log(myRegexp.test(1234));
