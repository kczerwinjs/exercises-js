var collection = require('./collection.js');

//create
var create = collection.create;
var newArr = create(5, function (index) {
 return index + 5;
});
console.log('create: ', newArr);

//map
var map = collection.map;
var arr = [1, 2, 3, 4, 5];
var newArray = map(arr, function (value, index, array) {
 return value * 2;
}, {context: true});
console.log('map: ', newArray); //[2, 4, 6, 8, 10]

//every
var every = collection.every;
var arrB = ['elephant', 'yo mama', 'wales'];
function isBig(creature) {
    if(creature.length > 4){
        return true;
    }else {
        return false;
    }//... return true or false
}
var res = every(arrB, isBig);
console.log('every: ', res);

//none
var none = collection.none;
function isCool(lang) {
 return lang === 'JS';
}
var arr = ['php', 'Java', 'Kobol', 'C#', 'JS'];
var resN = none(arr, isCool);
console.log('none: ', resN); //true

//unique
var unique = collection.unique;
var arrC = [1, 2, 2.5, 4, 4, 5, 5, 1.1];
var arrUniq = unique(arrC, function (value, index, array) {
 return Math.floor(value);
}, { context: true });
console.log('unique: ', arrUniq);

//add
var add = collection.add;
var epicBands = ['Metallica', 'Queen', 'Nirvana'];
var newAdd = add(epicBands, 'Black Sabbath', 'Slayer', 'Iron Maiden');
console.log('add: ', newAdd);
