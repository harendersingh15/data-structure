/*
Method List : DisplayAll(), DisplayAt(index), AddFirst(data), Add(data, index), RemoveFirst(), RemoveAt(index).
*/

class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
    }

    Count() {
        return this.count;
    }

    displayAll() {
        if (this.head == null) return null;
        else {
            let arr = new Array();
            let current = this.head;

            for (let index = 0; index < this.count; index++) {
                arr[index] = current.data;
                current = current.next;
            }

            return arr;
        }
    }

    displayAt(index) {

        if (index > -1 && index < this.count) {
            let current = this.head;
            let i = 0;

            while (i++ < index) {
                current = current.next;
            }

            return current.data;
        } else return null;
    }

    addFirst(data) {
        let node = {
            data: data,
            next: this.head
        }

        this.head = node;
        this.count++;
    }

    addAt(data, index) {
        if (index == 0) {
            this.addFirst(data);
        } else if (index > -1 && index < this.count) {

            let node = {
                data: data,
                next: null
            }

            let i = 0;
            let current = this.head;
            let previous = '';

            //find the right location
            while (i++ < index) {
                previous = current;
                current = current.next;

            }

            previous.next = node;
            node.next = current;

            this.count++;
        } else {
            console.error('out of range!!!');
            alert('out of range!!!');
        }
    }

    removeFirst() {
        if (this.head == null) {
            return null;
        } else {
            let out = this.head;
            this.head = this.head.next;

            if (this.count > 0) {
                this.count--;
            }

            return out.data;
        }
    }

    removeAt(index) {
        if (this.index == 0) {
            this.removeFirst();
        } else if (index > -1 && index < this.count) {
            let i = 0;
            let current = this.head;
            let previous;

            while (i++ < index) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            this.count--;
        } else {
            console.error('out of range!!!');
            alert('out of range!!!');
        }
    }
}