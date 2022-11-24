class Set {
    constructor() {
        this._items = {}
        this._size = 0
    }

    has(element) {
        return element in this._items;
    }

    add(element) {
        if (!this.has(element)) {
            this._items[element] = element
            this._size += 1
            return true
        }

        return false
    }

    delete(element) {
        if (this.has(element)) {
            delete this._items[element]
            this._size -= 1
            return true
        }
        return false
    }

    clear() {
        this._items = {}
    }

    size() {
        return this._items
    }

    values() {
        return Object.values(this._items)
    }

    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach(value => {
            unionSet.add(value);
        })

        otherSet.values().forEach(value => {
            unionSet.add(value)
        })

        return unionSet

    }

    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()

        let biggerSet = values
        let smallerSet = otherValues

        if ((otherValues.length - values.length) > 0) {
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })

        return intersectionSet
    }

    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        }

        let isSubSet = true
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                isSubSet = false
                return false
            }
            return true
        })
        return isSubSet
    }

    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet
    }
}