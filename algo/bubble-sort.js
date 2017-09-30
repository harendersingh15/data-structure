class BubbleSort {

    bs(items) {
        let length = items.length;
        for (let i = 0; i < length; i++) {
            let swap = false;
            for (let j = 0; j < length - i - 1; j++) {
                if (items[j] > items[j + 1]) {
                    //swap item
                    let temp = items[j];
                    items[j] = items[j + 1];
                    items[j + 1] = temp;
                    swap = true;
                }
            }

            //if array already sorted dont break the loop!!!
            if (swap == false)
                break;

            console.log('ok')
        }
        return items;
    }
}