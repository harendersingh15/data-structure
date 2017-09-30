class Queue {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    count() {
        return this.count;
    }

    enqueue(data) {
        let node = {
            data: data,
            next: this.head
        }

        if (this.head == null) this.tail = node;

        this.head = node;

        this.count++;

    }

    dequeue(data) {
        if (this.count == 0) return;

        let current = this.head;
        let prev = null;

        while (current.next) {
            prev = current;
            current = current.next
        }

        if (count > 1) {
            prev.next = null;
            this.tail = prev;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.count--;
    }

    displayAll() {
        if (this.head == null) return null;
        else {
            let arrary = new Array();
            let current = this.head;

            for (let index = 0; index < this.count; index++) {
                arrary[index] = current.data;
                current = current.next;
            }

            return arrary;
        }
    }
}