//Kadane's Algorithm & The Maximum Subarray Problem

function maxSubArray(numbers){
    if(numbers.length == 0){
        return 0;
    }
    let max = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(numbers[i-1] > 0) {
            numbers[i] += numbers[i-1];
        }
        max = Math.max(numbers[i], max);
    }
    return max;
}
console.log(maxSubArray([1, 3, -6, 12, 4, -3, 11, 9]));
