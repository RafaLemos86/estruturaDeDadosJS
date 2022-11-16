class Deque {
    constructor() {
        this._count = 0
        this._lowestCount = 0
        this._items = {}
    }

    addBack(element) {
        this._items[this._count] = element
        this._count++
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);

        } else if (this._lowestCount > 0) {
            this._lowestCount--
            this._items[this._lowestCount] = element

        } else {
            for (let i = this._count; i > 0; i--) {
                this._items[i] = this._items[i - 1]
            }
            this._count++
            this._lowestCount
            this._items[0] = element
        }


    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this._items[this._lowestCount]
        delete this._items[this._lowestCount]
        this._lowestCount++
        return result
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }

        this._count--
        const result = this._items[this._count]
        delete this._items[this._count];
        return result
    };

    peekFront() {
        if (!this.isEmpty) {
            return this._items[this._lowestCount]
        }

        return undefined
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this._items[this._count - 1]
    };


    isEmpty() {
        return this.size() === 0
    }


    size() {
        return this._count - this._lowestCount
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }

        let objString = `${this._items[this._lowestCount]}`;

        for (let i = this._lowestCount + 1; i < this._count; i++) {
            objString += `, ${this._items[i]}`
        }

        return objString
    }

}