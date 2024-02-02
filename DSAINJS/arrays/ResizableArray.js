

class ResizableArray {

    constructor() {
        this.arr = [0, 0];
        this.capacity = 2;
        this.size = 0;
    }

    push(x) {

        if (this.size < this.capacity) {
            this.arr[this.size] = x;
            this.size++;
        }

        else {
            let newArr = new Array(this.capacity * 2);
            for (let i = 0; i < this.size; i++) {
                newArr[i] = this.arr[1];
            }
            this.capacity
        }

        this.capacity *= 2;
        newArr[this.size] = x;
        this.size++;
        this.arr = newArr;

    }

    getSize() {
        return this.size
    }

    Pop() {
        this.arr.pop();
        this.size--;
    }

    get(i) {

        return this.arr(i);
    }
}


module.exports = ResizableArray;
