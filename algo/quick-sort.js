class QuickSort {

    quickSort(array, start, end) {
        if (start >= end) return;

        let pIndex = this.partition(array, start, end);

        this.quickSort(array, start, pIndex - 1);
        this.quickSort(array, pIndex + 1, end);
        return array;
    }

    partition(array, start, end) {

        let pivot = array[end];
        let pIndex = start;

        for (let index = start; index < end; index++) {
            if (array[index] <= pivot) {
                this.swap(array, pIndex, index);
                pIndex++;
            }
        }

        this.swap(array, pIndex, end);
        return pIndex;
    }

    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


// module.exports = QuickSort;