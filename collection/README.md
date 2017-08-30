# Exercise #1: Collection
## Tasks
Code should be written only using pure JavaScript (EcmaScript 5). No additional libraries are allowed. Obviously, if the tasks tells you to
implement `forEach` method, you should not use the native `forEach` method in the implementation.

## Collection
Create a simple Collection module that contains methods described below.

All methods of the Collection module are pure functions (no side effects). Values passed to the functions are never modified! All functions should
work both on arrays and pseudoarrays.

Solution should be provided in a single JavaScript file, named `collection.js`. All functions should be exported as a valid NodeJS module.

#### Module example
    module.exports = {
        create: function () {},
        forEach: function () {}
        //...
    };
### create
`create` will take two arguments: number of elements and generator function. It should return a new array, with elements created by calling given
generator on each index. Example:
#### Module example
    var newArr = create(5, function (index) {
        return index + 5;
    });
    newArr; // [5, 6, 7, 8, 9]
### map
Creates an array of values by running each element in original array through callback. The callback is bound to optional context argument and
invoked with three arguments: `(value, index, collection)`.
#### Module example
    var arr = [1, 2, 3, 4, 5];
    var newArray = map(arr, function (value, index, array) {
        return value * 2;
    }, {context: true});
    newArray; //[2, 4, 6, 8, 10]
### every
Checks if callback returns truthy for all elements of collection. The predicate is bound to optional third argument and invoked with three
arguments: `(value, index, collection)`.
#### Module example
    function isBig(creature) {
        //... return true or false
    }
    var arr = ['elephant', 'wale', 'yo mama'];
    var res = every(arr, isBig);
    res; //true
### none
Checks if callback returns falsy for all elements of collection. The predicate is bound to optional third argument and invoked with three
arguments: `(value, index, collection)`.
#### Module example
    function isCool(lang) {
        return lang === 'JS';
    }
    var arr = ['php', 'Java', 'Kobol', 'C#'];
    var res = none(arr, isCool);
    res; //true
### unique
Creates a duplicate-free version of an array. If a callback function is provided it’s invoked for each element in the array to generate the criterion by
which uniqueness is computed. The callback is bound to optional context argument and invoked with three arguments: `(value, index, array)`.
#### Module example
    var arr = [1, 2, 2.5, 4, 4, 5, 5, 1.1];
    var newArr = uniq(arr, function (value, index, array) {
        return Math.floor(value);
    }, { context: true });
    newArr; //[1,2,4,5]
### add
Creates a new array with values appended to the original collection. Multiple appended values can be provided as additional arguments.
#### Module example
    var epicBands = ['Metallica', 'Queen', 'Nirvana'];
    var newArray = add(epicBands, 'Black Sabbath', 'Slayer', 'Iron Maiden');
    epicBands; //['Metallica', 'Queen', 'Nirvana']
    newArray; // ['Metallica', 'Queen', 'Nirvana', 'Black Sabbath', 'Slayer', 'Iron Maiden']
