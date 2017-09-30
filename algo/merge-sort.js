class MergeSort {

    merge(array, L, R) {
        let nL = L.length;
        let nR = R.length;

        let i = 0,
            j = 0,
            k = 0;
        while (i < nL && j < nR) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < nL) {
            array[k] = L[i];
            i++;
            k++;
        }

        while (j < nR) {
            array[k] = R[j];
            j++;
            k++;
        }
    }

    mergeSort(array) {

        let length = array.length;
        if (length < 2)
            return;

        let l = 0;
        let r = array.length - 1;

        let mid = parseInt(l + (r - l) / 2);
        let leftArray = [];
        let rightArray = [];

        for (let index = 0; index < mid + 1; index++) {
            leftArray[index] = array[index];
        }

        for (let indexi = 0; indexi < r - mid; indexi++) {
            rightArray[indexi] = array[mid + 1 + indexi];
        }

        this.mergeSort(leftArray);
        this.mergeSort(rightArray);
        this.merge(array, leftArray, rightArray);

        return array;
    }
}