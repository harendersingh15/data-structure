//in general day-2-day sorting dont use selection sort, instead use .sort() method 
class SelectionSort {

    selectionSort(items) {
        let l = items.length;

        items.forEach((element, index) => {
            let min = index;

            for (let i = min + 1; i < l; i++) {

                if (items[i] < items[min]) {
                    min = i;
                }
            }
            //swap if the current min not equal to the initial minimum
            if (min != index) {
                let temp = items[index];
                items[index] = items[min];
                items[min] = temp;
            }
        });
        console.log(items);
        return items;
    }
}