const binarysearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarysearch(array, target));
******************************************
RECURSIVE
+++++++++++
const binarysearch = (arr, target, low, high) => {
  if (low <= high) {
    let mid = Math.floor(low + high / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      return binarysearch(arr, target, low, mid - 1);
    }
    if (arr[mid] < target) {
      return binarysearch(arr, target, mid + 1, high);
    }
  }
  return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 4;
console.log(binarysearch(array, target, 0, 9));
