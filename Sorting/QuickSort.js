// Approch one

// function quickSort(arr){
// let pivot=arr[0];
// let leftArr = [];
// let rightArr = [];
// if(arr.length<=1){
//   return arr;
// }
// for(let i=1;i<arr.length;i++){
//   if(pivot>arr[i]){
//     leftArr.push(arr[i]);
//   }
//   else{
//     rightArr.push(arr[i]);
//   }
// }
// console.log(leftArr,pivot,rightArr);
// return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }
// console.log(quickSort([5,2,9,3,6,1,8,7]));


//step 1
//pivot = 5
// leftArr = [2,3,1]
//rightArr = [9,6,8,7]

//Second Approch
var arr = [5, 2, 9, 3, 6, 1, 8, 7];
function partition(arr, lowIndex, highIndex) {
  let pivot = arr[highIndex];
  let i = lowIndex-1;
  console.log(arr, lowIndex, highIndex);
  for(let j =lowIndex; j<highIndex;j++){
    if(pivot>arr[j])
      {
        i++;
        [arr[i],arr[j]]=[arr[j],arr[i]]
        console.log(pivot,arr[j],arr[i]);
      }
  }
  [arr[i + 1], arr[highIndex]] = [arr[highIndex], arr[i + 1]]; 
  console.log(arr,i+1);
  return i+1;
}


function quickSort(arr, lowIndex = 0, highIndex = arr.length - 1) {
  if (lowIndex >= highIndex) return;
  const pivotIndex = partition(arr, lowIndex, highIndex);
  quickSort(arr, lowIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, highIndex);
  return arr;
}
 console.log(quickSort(arr));

