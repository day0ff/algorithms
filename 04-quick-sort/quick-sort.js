function quickSort(array){
    if(array.length < 2) return array;

    const index = Math.round(array.length / 2) - 1;
    const pivot = array.splice(index,1);
    const less = array.filter(num => num <= pivot);
    const greater = array.filter(num => num > pivot);

    return [...quickSort(less), ...pivot, ...quickSort(greater)];
}

module.exports = quickSort;
