const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(l, k) {
//   while (l['value'] === k) l = l['next']
//   function check(l) {
//     console.log(l['next'])
//     if (l['next']['next'] === null) return l
//     else {
//       while (l['next']['value'] === k){
//         if (l['next']['next']){
//           l['next']['value'] = l['next']['next']['value']
//           l['next'] = l['next']['next']
//         } else {
//           l['next'] = null
//         }
//       }
//       return check(l['next'])
//     }
//   }
//   check(l)
//   return l
// }
function removeKFromList(l, k) {
  let temp = []
  function check(l) {
    if (l['next'] === null){
      temp.push(l['value'])
    }
    else {
      temp.push(l['value'])
      return check(l['next'])
    }
  }
  function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }
  check(l)
  temp = temp.filter((item)=> item !== k)
  return convertArrayToList(temp)
}

module.exports = {
  removeKFromList
};
