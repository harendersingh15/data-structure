class BinarySearch {

    constructor() {
        this.array = [2, 4, 5, 6, 1, 8, 9, 10]
    }

    //search the input item from array, if matches return index else -1
    bs(array, l, r, item) {
        if (r >= l) {
            let mid = parseInt(l + (r - l) / 2);
            if (array[mid] == item)
                return mid;
            else if (array[mid] > item) {
                return this.bs(array, l, mid - 1, item);
            } else if (array[mid] <= item) {
                return this.bs(array, mid + 1, r, item);
            }
        } else {
            return -1;
        }

    }
}