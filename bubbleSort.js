// These all work!!!
// My bubbleSort
function bubbleSort(array){
    var storage = 0;
    for(var i=0; i<array.length; i++){
        // this can be used to move through the array
        for(var j=0; j<array.length; j++){
            // here I am actually making the comparisons and switching
            if(array[j]>array[j+1]){
                storage = array[j];
                array[j] = array[j+1];
                array[j+1] = storage; 
            }
        }
    }
    return array;
}
// console.log(bubbleSort([1, 5, 3, 7, 2, 8, 9, 4, 6]));
// Try to do this without creating a new array :)

// Other Peoples bubbleSorts
function bubbleSortSec(arr){
    for (let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j +1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSortSec([1, 5, 3, 7, 2, 8, 9, 4, 6]));