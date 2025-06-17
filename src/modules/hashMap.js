import { LinkedList } from './linkedList';

export class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.array = new Array(capacity).fill(null);
  }

  // hash() takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  // set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value.
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

  // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      const linkedListWithKey = this.array[index];
      const keyIndex = linkedListWithKey.find(key);
      const node = linkedListWithKey.at(keyIndex);
      const value = node.keyValuePair[1];

      return value;
    }
    return null;
  }

  // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    const index = this.hash(key);
    const linkedListWithKey = this.array[index];

    if (linkedListWithKey.contains(key)) return true;

    return false;
  }

  // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  remove(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      let linkedListWithKey = this.array[index];
      const listIndex = linkedListWithKey.find(key);
      linkedListWithKey.removeAt(listIndex);

      if (linkedListWithKey.size() === 0) {
        this.array[index] = null;
      }

      return true;
    }
    return false;
  }

  // replace() takes a key & a value as arguments. If the key exists, it's value is overwritten by the new one.
  replace(key, value) {
    if (this.has(key)) {
      const index = this.hash(key);
      const linkedListWithKey = this.array[index];
      const listIndex = linkedListWithKey.find(key);
      const node = linkedListWithKey.at(listIndex);
      node.keyValuePair = [key, value];
    }
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    let length = 0;

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] !== null) {
        const linkedList = this.array[i];
        length += linkedList.length;
      }
    }
    return length;
  }

  // clear() removes all entries in the hash map.
  clear() {
    if (this.length !== 0) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] !== null) {
          this.array[i] = null;
        }
      }
    }
  }

  // keys() returns an array containing all the keys inside the hash map.
  keys() {
    if (this.length !== 0) {
      let nodesArray = this.entries();
      let keysArray = [];

      if (nodesArray) {
        for (let i = 0; i < nodesArray.length; i++) {
          const key = nodesArray[i][0];
          keysArray.push(key);
        }
      }
      return keysArray;
    }
    return null;
  }

  // values() returns an array containing all the values.
  values() {
    if (this.length !== 0) {
      let nodesArray = this.entries();
      let valuesArray = [];

      if (nodesArray) {
        for (let i = 0; i < nodesArray.length; i++) {
          const key = nodesArray[i][1];
          valuesArray.push(key);
        }
      }
      return valuesArray;
    }
    return null;
  }

  // returns an array that contains each key, value pair.
  entries() {
    if (this.length !== 0) {
      let nodesArray;

      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] !== null) {
          nodesArray = this.array[i].toArray();
        }
      }
      return nodesArray;
    }
    return null;
  }
}
