function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index];
            smallestIndex = index;
        }
    }

    return smallestIndex;
}

function selectionSort(arr){
    const tempArr = [...arr];

    for(let index = 0; index < arr.length; index++){
        const smallestIndex = findSmallestIndex(tempArr);

        arr[index] = tempArr[smallestIndex];
        tempArr.splice(smallestIndex, 1);
    }

    return arr;
}

module.exports = { findSmallestIndex, selectionSort };
