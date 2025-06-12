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
    console.log(this.array);
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.array[index]) {
      this.array[index] = [];
    }
    this.array[index].push([key, value]);

    return this.array;
  }
}
