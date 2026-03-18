const arr =[5,2,3,44,88,56,74,25,30,96];
function iteration (arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}
iteration(arr);

function reverse (arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
reverse(arr);

function sum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);

}
sum(arr);


function even (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
even(arr);

function odd (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
}
odd(arr);