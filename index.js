class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos < this.length) {
      return pos;
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) return Math.max(...this.items);
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.length > 0) return Math.min(...this.items);
    throw new Error("EmptySortedList");
  }

  sum() {
    if (this.length > 0) {
      let sum = this.items.reduce((a, b) => {
        return a + b;
      }, 0);
      return sum;
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      let sum = this.items.reduce((a, b) => {
        return a + b;
      }, 0);
      return sum / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
