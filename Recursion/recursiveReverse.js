// Write a function 'recursiveReverse' that takes an array 
// and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
    var newValue = arr.pop();
    if(arr.length == 0){
        return [newValue];
    }
    return [newValue].concat(recursiveReverse(arr));
}