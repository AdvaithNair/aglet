//Sort By Rank
//MergeSort - O(N LOG N)
export function sortByRank(list) {
    if (list.length < 2) {
      return list;
    }
  
    const middle = Math.floor(list.length / 2);
    const left = list.slice(0, middle);
    const right = list.slice(middle);
  
    return merge(sortByRank(left), sortByRank(right));
}

function merge(left, right) {
    let list = [];
  
    while (left.length && right.length) {
      if (left[0].ranking < right[0].ranking) {
        list.push(left.shift());
      } else {
        list.push(right.shift());
      }
    }
    return list.concat(left.slice().concat(right.slice()));
} 

export function getName(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].name);
    }
}

//Sort By Name
//Selection Sort - O(N^2)
export function sortByName(list) {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (list[min].name.toLowerCase() > list[j].name.toLowerCase()) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = list[i];
            list[i] = list[min];
            list[min] = temp;
        }
    }
    console.log(list);
    return list;
}

//Sort By Price
//Radix Sort - O(N)
export function sortByPrice(list){
    let max = Math.floor(Math.log10(getMaxPrice(list)));  
    let digits = [];
    let index = 0;
  
    for(let i = 0; i < max + 1; i++){
      digits = [];
      for(let j = 0; j < list.length; j++){
        let currentDigit = getDigit(list[j].price, i + 1);
  
        digits[currentDigit] = digits[currentDigit] || [];
        digits[currentDigit].push(list[j]);
      }
  
      index = 0;

      for(let k = 0; k < digits.length; k++){
        if(digits[k] && digits[k].length > 0){
          for(let l = 0; l < digits[k].length; l++){
            list[index++] = digits[k][l];
          }
        }
      }
    }

    return list.reverse();
}

function getDigit(num, typeDigit){
    let lastDigit = 0;
    while(typeDigit--) {
        lastDigit = num % 10;
      num = Math.floor((num - lastDigit) / 10);
    }
    return lastDigit;
}

function getMaxPrice(list) {
    let maxPrice = list[0].price;

    for(let i = 1; i < list.length; i++) {
        if (list[i].price > maxPrice) {
            maxPrice = list[i].price;
        }
    }
    return maxPrice;
}

//Sort By Colorway
//QuickSort - O(N LOG N)
export function sortByColorway(list) {
    return quickSort(list, 0, list.length - 1);
}

function quickSort(list, left, right) {
    let index;
    if(list.length > 1) {
        index = partition(list, left, right);
        if(left < index - 1) { 
            quickSort(list, left, index - 1);
        } if(index < right) { 
            quickSort(list, index, right);
        }
    }
    return list;
}

function partition(list, left, right) {
    let pivot = list[Math.floor((right + left) / 2)].colorway.toLowerCase();
    let tempLeft = left;
    let tempRight = right;

    while (tempLeft <= tempRight) {
        while (list[tempLeft].colorway.toLowerCase() < pivot) {
            tempLeft++;
        }
        while (list[tempRight].colorway.toLowerCase() > pivot) {
            tempRight--;
        }
        if (tempLeft <= tempRight) {
            swap(list, tempLeft, tempRight);
            tempLeft++;
            tempRight--;
        }
    }
    return tempLeft;
}

function swap(list, indexLeft, indexRight){
    let temp = list[indexLeft];
    list[indexLeft] = list[indexRight];
    list[indexRight] = temp;
}

//Sort By Ownership
//Bubble Sort - O(N ^ 2)
//I used this to make sure the sort is stable, so it will inherrently rank by ranking too
export function sortByOwnership(list){
    let toSwap;
    let n = list.length-1;

    list = sortByRank(list);

    do {
        toSwap = false;
        for (let i = 0; i < n; i++){
            if (list[i].ownership < list[i + 1].ownership) {
               let temp = list[i];
               list[i] = list[i + 1];
               list[i + 1] = temp;
               toSwap = true;
            }
        }
        n--;
    } while (toSwap);

    return list; 
}