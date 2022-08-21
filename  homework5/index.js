let arr = [],
    arrLength,
    minValueArr = 0,
    maxValuetArr = 0,
    minArrLength = 2,
    maxArrLength = 10,
    minValueArrFrom = -10,
    minValueArrTo = 10,
    maxValueArrTo = 50,
    indexOfMin,
    indexOfMax;

do{
    arrLength = prompt(`Enter the length of array from ${minArrLength} to ${maxArrLength}`);
    arrLength = Math.abs(arrLength);
    arrLength = Math.round(arrLength);
} while (!arrLength || arrLength<minArrLength || arrLength>maxArrLength);

do{
    minValueArr = prompt(`Enter the minimum value array element from ${minValueArrFrom} to ${minValueArrTo}`);
    if(isNaN(minValueArr)) minValueArr = false;
    if(minValueArr && minValueArr.match(/^(?!0\d)\d*(\.\d+)?$/)) minValueArr = Math.round(minValueArr);
} while (!minValueArr || minValueArr<minValueArrFrom || minValueArr>minValueArrTo);

minValueArr = parseInt(minValueArr);

do{
    maxValuetArr = prompt(`Enter the maximum value array element up to ${maxValueArrTo}, but not less than the ${minValueArr}`);
    if(isNaN(maxValuetArr)) maxValuetArr = false;
    if(maxValuetArr && maxValuetArr.match(/^(?!0\d)\d*(\.\d+)?$/)) maxValuetArr = Math.round(maxValuetArr);
} while (!maxValuetArr || maxValuetArr<=minValueArr || maxValuetArr>maxValueArrTo)

maxValuetArr = parseInt(maxValuetArr);

for(let i=0; i<arrLength; i++){
    arr[i] = Math.floor(Math.random() * (maxValuetArr - minValueArr + 1) + minValueArr);
}
console.log(arr);

let minElement = Math.min(...arr),
    maxElement = Math.max(...arr);

console.log(minElement);
console.log(maxElement);

indexOfMin = arr.indexOf(minElement);
indexOfMax = arr.indexOf(maxElement);
arr[indexOfMin] = maxElement;
arr[indexOfMax] = minElement;

console.log(arr);