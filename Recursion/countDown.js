// Write a function that loops through the numbers n down to 0.

function countDown(n) {
    console.log("n",n);
    if(n == 0){
        return;
    }
    countDown(n - 1);
}