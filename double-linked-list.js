/*
Why and where we need this,

- A music player which has next and prev buttons.
- Represent a deck of cards in a game.
- The browser cache which allows you to hit the BACK-FORWARD pages.
- Applications that have a Most Recently Used list (a linked list of file names)
- Undo-Redo functionality

DisplayAll(), DisplayAllBackwards() DisplayAt(index), AddFirst(data),AddLast(data), Add(data, index), RemoveFirst(), RemoveFirst(), RemoveAt.

*/
class DoubleLinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    getCount() {
        return this.count;
    }

    getTail() {
        if (this.tail) {
            return this.tail.data;
        } else {
            return null;
        }
    }

    getHead() {
        if (this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }

    node(data) {
        return {
            data: data,
            next: null,
            previous: null
        }
    }

    displayAll() {
        if (this.head) {
            let arr = new Array();
            let current = this.head;

            while (current) {
                arr.push(current.data);
                current = current.next;
            }

            return arr;
        } else {
            return null;
        }
    }

    displayAllBackward() {
        if (this.head) {
            let arr = new Array();
            let current = this.tail;

            while (current) {
                arr.push(current.data);
                current = current.previous;
            }

            return arr;
        } else {
            return null;
        }
    }

    displayAt(index) {

        if (index < -1 && index < this.count) {
            let current = this.head;
            let i = 0;


            while (i++ < index) {
                current = current.next;
            }

            return current.data;
        } else {
            return null;
        }
    }

    addFirst(data) {
        let node = this.node(data);

        node.next = this.head;

        this.head = node;

        if (this.count == 0) {
            this.tail = node;
        } else {
            this.head.next.previous = node;
        }

        this.count++;
    }

    addLast(data) {
        let node = this.node(data);

        node.previous = this.tail;
        if (this.count == 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    addAt(index, data) {
        if (index > 0 && index < this.count) {
            let node = this.node(data);
            let i = 0;
            let current = this.head;

            while (i++ < index) {
                current = current.next;
            }

            current.previous.next = node;
            node.next = current;

            node.previous = current.previous;
            current.previous = node;

            this.count++;
        } else if (index < 1) {
            this.addFirst(data);
        } else {
            this.addLast(data);
        }
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;

            if (this.count == 0) {
                this.tail = null;
            } else {
                this.head.previous = null;
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
                this.tail.previous.next = null;
                this.tail = this.tail.previous;
            }

            this.count--;
        }
    }

    removeAt(index) {
        if (this.head) {
            if (this.count == 1) {
                this.tail = null;
                this.head = null;
            } else {
                let i = 0;
                let current = this.head;

                while (i++ < index) {
                    current = current.next;
                }

                current.previous.next = current.next;
                current.next.previous = current.previous;

                this.count--;
            }
        }
    }
}