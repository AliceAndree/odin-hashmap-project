import { Node } from './node';

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  append(key, value) {
    const newNode = new Node([key, value]);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    let temp = this.head;
    let pre = null;

    while (temp.nextNode != null) {
      pre = temp;
      temp = temp.nextNode;
    }
    pre.nextNode = null;
    this.tail = pre;
    this.length--;
  }

  contains(value) {
    let temp = this.head;

    while (temp != null) {
      if (temp.keyValuePair[0] === value) return true;
      temp = temp.nextNode;
    }

    return false;
  }

  find(value) {
    let temp = this.head;
    let index = 0;

    while (temp != null) {
      if (temp.keyValuePair[0] === value) return index;
      temp = temp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let temp = this.head;
    let string = ``;

    while (temp != null) {
      let stringValue = temp.keyValuePair;
      string += `( ${stringValue} ) -> `;
      temp = temp.nextNode;
    }

    return `${string}${temp}`;
  }

  insertAt(index, value) {
    let temp = this.at(index);
    let pre = this.at(index - 1);

    if (temp) {
      const newNode = new Node(value);
      pre.nextNode = newNode;
      newNode.nextNode = temp;
      this.length++;
    }
  }

  removeAt(index) {
    let temp = this.at(index);
    let pre = this.at(index - 1);

    if (!pre) {
      temp.keyValuePair = null;
      this.length--;
    } else {
      if (temp) {
        pre.nextNode = temp.nextNode;
        this.length--;
      }
    }
  }
}
