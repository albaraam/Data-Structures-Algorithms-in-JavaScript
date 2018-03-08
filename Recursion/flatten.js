/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
    var falttenArray = [];
    arr.forEach(function (elt) {
        if(Array.isArray(elt)){
            falttenArray = falttenArray.concat(flatten(elt));
        }else{
            falttenArray.push(elt);
        }
    });
    return falttenArray;
}