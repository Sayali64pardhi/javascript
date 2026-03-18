const arr =[5,2,3,44,88,56,74,25,30,96];
function even (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
even(arr);