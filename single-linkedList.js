// The initial list is empty
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeToEnd(newNode) {
    if (!this.head) {
      this.head = newNode;
    } else {
      // Traverse the list from beginning to end
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      // Add new node to the end of the linked list
      curNode.next = newNode;
    }
  }

  // Traverse the list from a given starting node to the end
  traverseLinkedList(startNode) {
    let curNode = startNode;

    while (curNode !== null) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }
}

const myLinkedList = new LinkedList();
const node1 = new Node(10), node2 = new Node(20), node3 = new Node(30);

myLinkedList.addNodeToEnd(node1);
myLinkedList.addNodeToEnd(node2);
myLinkedList.addNodeToEnd(node3);

// This will traverse the list starting from node2
myLinkedList.traverseLinkedList(node2);
