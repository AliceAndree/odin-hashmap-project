import { LinkedList } from './linkedList';

export class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.array = new Array(capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.array[index]) {
      const linkedList = new LinkedList();
      this.array[index] = linkedList;
    }

    if (!this.has(key)) {
      this.array[index].append(key, value);
    } else {
      this.replace(key, value);
    }

    return this;
  }

  has(key) {
    const index = this.hash(key);
    const linkedListWithKey = this.array[index];

    if (linkedListWithKey.contains(key)) return true;

    return false;
  }

  remove(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      const linkedListWithKey = this.array[index];

      for (let i = 0; i < linkedListWithKey.length; i++) {
        if (linkedListWithKey[i][0] === key) {
          console.log(linkedListWithKey);
          linkedListWithKey[i] = null;
        }
      }
    }
  }

  replace(key, value) {
    if (this.has(key)) {
      const index = this.hash(key);
      const linkedListWithKey = this.array[index];
      const listIndex = linkedListWithKey.find(key);
      const node = linkedListWithKey.at(listIndex);
      node.keyValuePair = [key, value];
    }
  }
}
