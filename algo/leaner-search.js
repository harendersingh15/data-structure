class LeanerSearch {

    constructor() {
        this.array = [2, 4, 5, 6, 1, 8, 9, 10]
    }

    //search the input item from array, if matches return index else -1
    search(item) {

        let itemIndex = -1;
        for (let index = 0; index <= this.array.length; index++) {
            if (item === this.array[index]) {
                itemIndex = index + 1;
                break;
            }
        }
        return itemIndex;
    }
}