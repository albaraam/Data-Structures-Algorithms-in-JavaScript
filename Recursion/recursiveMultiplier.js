// Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', 
// and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
    var newValue = arr.shift() * num;
    if(arr.length == 0){
        return [newValue];
    }
    return [newValue].concat(recursiveMultiplier(arr, num));
}