// Write a function 'exponent' that takes two arguments base, and expo, 
// and recursively returns exponent value of the base.

function exponent(base, expo) {
    if(expo == 1){
        return base;
    }
    return base * exponent(base, expo - 1);
}