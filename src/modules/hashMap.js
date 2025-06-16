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
    const linkedList = new LinkedList();

    if (!this.array[index]) {
      //   this.array[index] = [];
      this.array[index] = linkedList;
    }

    linkedList.append(key, value);

    // if (!this.has(key)) {
    //   this.array[index].push([key, value]);
    // } else {
    //   this.replace(key, value);
    // }

    return this;
  }

  has(key) {
    const index = this.hash(key);
    const existingKeys = this.array[index];

    if (existingKeys) {
      for (const entity of existingKeys) {
        if (entity[0] !== key) return false;
        return true;
      }
    }
    return false;
  }

  remove(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      const existingKeys = this.array[index];

      for (let i = 0; i < existingKeys.length; i++) {
        if (existingKeys[i][0] === key) {
          console.log(existingKeys);
          existingKeys[i] = null;
        }
      }
    }
  }

  replace(key, value) {
    const index = this.hash(key);
    const existingKeys = this.array[index];

    for (const entity of existingKeys) {
      if (entity[0] === key) entity[1] = value;
    }
  }
}
