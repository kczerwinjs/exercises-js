module.exports = {
    create: function (itemsNb, cb) {
        var list = [];
        for(var i = 0; i < itemsNb; i++) {
            list.push(cb(i));
        }
        return list;
    },
    forEach: function () {},
    map: function(items, cb) {
        var list = [];
        for(var i = 0; i < items.length; i++) {
            list.push(cb(items[i]));
        }
        return list;
    },
    every: function(items, cb) {
        var list = [];
        for(var i = 0; i < items.length; i++) {
            if(cb(items[i]) == false){
                return false;
            };
        }
        return true;
    },
    none: function(items, cb) {
        var list = [];
        for(var i = 0; i < items.length; i++) {
            if(cb(items[i]) == true){
                return false;
            };
        }
        return true;
    },
    unique: function(items, cb) {
        var list = [];
        for(var i = 0; i < items.length; i++) {
            if(list.indexOf(cb(items[i])) == -1){
                list.push(cb(items[i]));
            }
        }
        return list;
    },
    add: function a(items, names) {
            var argList = a.arguments;
            for(var i = 1; i < argList.length; i++){
                items.push(argList[i]);
            }
            return items;
    }
};
