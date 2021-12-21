let str = '<> <a href="/"> <input type="radio" checked> <b>';
let regExp = /<\w.*?>/g;    //<\w.*?>/;
console.log(str.match(regExp));