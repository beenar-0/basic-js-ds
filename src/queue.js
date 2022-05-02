const {NotImplementedError} = require('../extensions/index.js');
const {getName} = require("chai/lib/chai/utils");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    queue = null

    getNode(x) {
        let node = {}
        node.value = x;
        node.next = null;
        return node
    }

    getUnderlyingList() {
        return this.queue
    }

    enqueue(value) {
        let res
        if (this.queue === null) this.queue = this.getNode(value)
        else {
            let currentNode = this.queue
            while (currentNode['next']) {
                currentNode = currentNode['next']
                res = currentNode['value']
            }
            currentNode['next'] = this.getNode(value)
        }
    }

    dequeue() {
        let res = this.queue['value']
        this.queue = this.queue['next']
        return res
    }
}

module.exports = {
    Queue
};
