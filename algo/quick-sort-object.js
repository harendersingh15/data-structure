class QuickSortObject {

    qs(array, key, start, end) {

        if (start < end) {
            let pIndex = this.partition(array, key, start, end);

            this.qs(array, key, start, pIndex - 1);
            this.qs(array, key, pIndex + 1, end);
        }

        return array;
    }

    partition(array, key, start, end) {
        let pivot = array[end][key];
        let pIndex = start;

        for (let index = start; index < end; index++) {
            if (array[index][key] <= pivot) {
                this.swap(array, index, pIndex);
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