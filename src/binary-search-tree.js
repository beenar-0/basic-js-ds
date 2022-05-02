const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(x) {
        let node = {}
        node.data = x
        node.left = null
        node.right = null
        return node
    }
}

class BinarySearchTree {
    constructor() {
        this.data = null
    }

    root() {
        if (!this.data) return null
        else return this.data
    }


    add(data) {
        this.data = addData(this.data, data)

        function addData(node, data) {
            if (!node) return new Node(data)

            if (node.data === data) return node

            if (data < node.data) node.left = addData(node.left, data)
            else node.right = addData(node.right, data)
            return node
        }
    }

    has(data) {
        return hasNode(this.data, data)

        function hasNode(node, data) {
            if (!node) return false

            if (node.data === data) return true

            if (data < node.data) return hasNode(node.left, data)
            else return hasNode(node.right, data)

        }
    }

    find(data) {
        return findData(this.data, data)

        function findData(node, data) {
            if (!node) return null

            if (node.data === data) return node

            if (data < node.data) return findData(node.left, data)
            else return findData(node.right, data)
        }
    }

    remove(data) {
        this.data = deleteData(this.data, data)

        function deleteData(node, data) {
            if (!node) return null

            if (data < node.data){
                node.left = deleteData(node.left, data)
                return node
            }
            else if (data > node.data) {
                node.right = deleteData(node.right, data)
                return node
            }
            else {
                if (!node.left && !node.right) return null

                if (!node.left) {
                    node = node.right
                    return node
                }

                if (!node.right) {
                    node = node.left
                    return node
                }

                let minRight = node.right
                while (minRight.left) {
                    minRight = minRight.left
                }
                node.data = minRight.data

                node.right = deleteData(node.right, minRight.data)

                return node
            }
        }

    }

    min() {
        return findMin(this.data)
        function findMin(node) {
            if (!node) return null

            if (!node.left) return node.data

            if (node.left) return findMin(node.left)
        }
    }

    max() {
        return findMax(this.data)
        function findMax(node) {
            if (!node) return null

            if (!node.right) return node.data

            if (node.right) return findMax(node.right)
        }
    }
}

module.exports = {
    BinarySearchTree
};