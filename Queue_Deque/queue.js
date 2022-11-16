class Queue {
    constructor() {
        this._count = 0
        this._lowestCount = 0
        this._items = {}
    }

    enqueue(element) {
        this._items[this._count] = element
        this._count++
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this._items[this._lowestCount]
        delete this._items[this._lowestCount]
        this._lowestCount++
        return result
    }

    peek() {
        if (!this.isEmpty) {
            return this._items[this._lowestCount]
        }

        return undefined
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this._count - this._lowestCount
    }

    clear() {
        this._count = 0
        this._lowestCount = 0
        this._items = {}
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
module.exports = Queue