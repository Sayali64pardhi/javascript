
const arr =[5,2,3,44,88,56,74,25,30,96];
function sum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);

}
sum(arr);