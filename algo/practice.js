class Problems {

    constructor() {}

    getMissingNumber(items) {

        //step 1, get the summ of all numbers from range 1-n
        let n = items[items.length - 1];
        let sum = n * (n + 1) / 2;

        let number = items.reduce((acc, items) => {
            return acc = acc - items;
        }, sum);

        return number;
    }

    getPivotedBinarySearch(array, key) {
        let length = array.length;

        let pivot = _findPivot(array, 0, length - 1);

        if (pivot == -1)
            return _bs(array, 0, length - 1, key);

        //if we found pivot and pivot value is equal to key, then return pivot value
        if (array[pivot] == key)
            return pivot;

        if (key >= array[pivot])
            return _bs(array, 0, pivot - 1, key);

        return _bs(array, pivot + 1, length - 1, key);
    }

    //-------------------------PRIVATE method--------------------------//

}

const _findPivot = (array, l, r) => {
    if (l > r) return -1;

    if (l == r) return l;

    let mid = parseInt(l + (r - l) / 2);

    //base condition 1
    if (mid > l && array[mid] < array[mid - 1])
        return mid - 1;
    //base condition 2
    if (mid < r && array[mid] > array[mid + 1])
        return mid;

    if (array[l] >= array[mid])
        return _findPivot(array, l, mid - 1);

    return _findPivot(array, mid + 1, r);
}

const _bs = (array, l, r, key) => {
    if (l > r)
        return -1;

    let mid = parseInt(l + (r - l) / 2);

    if (array[mid] == key)
        return mid;

    if (array[mid] > key)
        return _bs(array, l, mid - 1, key);

    return _bs(array, mid + 1, r, key);

}