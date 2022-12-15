const Node = require('./Node')



class BinarySearchTree {
    constructor() {
        this.root = null
    };

    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        }

        else {
            this.insertNode(this.root, key)
        };
    };

    insertNode(node, key) {
        if (node.key > key) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {

                this.insertNode(node.left, key)
            }

        } else {

            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    };

    inOrderTraverse(node = this.root) {
        if (node != null) {
            this.inOrderTraverse(node.left)
            console.log(node.key)
            this.inOrderTraverse(node.right)
        };
    };


    preOrderTraverse(node = this.root) {
        if (node != null) {
            console.log(node.key)
            this.preOrderTraverse(node.left)
            this.preOrderTraverse(node.right)
        };
    };

    postOrderTraverse(node = this.root) {
        if (node != null) {
            this.postOrderTraverse(node.left)
            this.postOrderTraverse(node.right)
            console.log(node.key)
        }

    }

    minNode(node) {
        let current = node

        while ((current) && (current.left)) {
            current = current.left
        };

        return current.key
    };

    maxNode(node) {
        let current = node

        while ((current) && (current.right)) {
            current = current.right
        };

        return current.key


    };

    searchNode(node, key) {
        if (node == null) {
            return false
        };

        if (node.key > key) {
            return this.searchNode(node.left, key)

        } else if (node.key < key) {
            return this.searchNode(node.right, key)

        } else {
            return true
        };
    };

    removeNode(node, key) {
        if (node == null) {
            return false
        }

        if (node.key > key) {
            node.left = this.removeNode(node.left, key)
            return node

        } else if (node.key < key) {
            node.right = this.removeNode(node.right, key)
            return node

        } else {
            if ((node.right == null) && (node.left == null)) {
                node = null
                return node
            }

            if (node.left == null) {
                node = node.right
                return node

            } else if (node.right == null) {
                node = node.left
                return node
            }

            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        };
    }

    findNode(node, key) {
        if (node == null) {
            return false
        }

        if (node.key > key) {
            return this.findNode(node.left, key)

        } else if (node.key < key) {
            return this.findNode(node.right, key)

        } else {
            return node
        }


    }

    min() {
        return this.minNode(this.root)
    };

    max() {
        return this.maxNode(this.root)
    };

    search(key) {
        return this.searchNode(this.root, key)
    }

    remove(key) {
        return this.removeNode(this.root, key)
    }

    find(key) {
        return this.findNode(this.root, key)
    }
}