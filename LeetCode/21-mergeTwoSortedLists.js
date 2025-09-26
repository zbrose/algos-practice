function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  while (list1 !== null) {
    console.log(list1.next);
  }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
