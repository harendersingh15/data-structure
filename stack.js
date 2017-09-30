class Stack {
    constructor() {
        this.top = null;
        this.count = 0;
    }

    getCount() {
        return count;
    }

    push(data) {
        let node = {
            data: data,
            next: null
        }

        node.next = this.top;
        this.top = node;

        this.count++;
    }

    pop() {
        if (this.top == null) return null;

        let out = this.top;

        this.top = this.top.next;
        if (this.count > 0)
            this.count--;

        return out.data;

    }

    peek() {
        if (this.top == null) return null;
        return this.top.data;
    }


    displayAll() {
        if (this.top == null) return null;
        else {
            //instantiate an array
            var arr = new Array();
            //creates a node to move through the stack
            var current = this.top;

            //moves through the stack until it reaches the bottom item
            for (var i = 0; i < this.count; i++) {
                //assigns the data to the array
                arr[i] = current.data;
                //advances one step
                current = current.next;
            }
            //returns the array
            return arr;
        }
    }
}

class Stack1 {
    constructor() {
        this._size = 0;
        this._storage = {};
    }

    push(data) {
        let size = ++this._size;
        this._storage[size] = data;
    }

    pop() {
        let size = this._size;
        let deletedData;
        if (size) {
            deletedData = this._storage[size];

            delete this._storage[size];
            this._size--;

            return deletedData;
        }
    }
}