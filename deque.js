/*
    DisplayHeadToTail(), DisplayTailToHead() AddHead(data), AddTail(data),RemoveHead() and RemoveTail()
*/

class Deque {

    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    count() {
        return this.count;
    }

    node(data) {
        this.data = data;
        this.next = null;
    }

    getHead() {
        if (this.head) {
            return this.head;
        } else {
            return null;
        }
    }

    getTail() {
        if (this.tail) {
            return this.tail;
        } else {
            return null;
        }
    }

    displayHeadToTail() {
        if (this.head) {
            let current = this.head;
            let array = new Array();

            while (current) {
                array.push(current.data);
                current = current.next;
            }

            return array;
        } else {
            return null;
        }
    }

    displayTailToHead() {
        if (this.tail) {
            let arr = this.displayHeadToTail();

            return arr.reverse();
        } else {
            return null;
        }
    }

    addHead(data) {
        let node = this.node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail)
            this.tail = this.head;

        this.count++;
    }

    addTail(data) {
        let node = this.node(data);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;

        this.count++
    }

    removeHead() {
        if (this.head) {
            if (this.count == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }

            this.count--;
        }
    }

    removeTail() {
        if (this.head) {
            if (this.count == 1) {
                this.head = null;
                this.tail = null;
            } else {
                let current = this.head;

                while (current.next.next) {
                    current = current.next;
                }

                this.tail = current;

                this.tail.next = null;
            }

            this.count--;
        }
    }
}