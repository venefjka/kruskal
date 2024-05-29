export default class DisjointSet {
  constructor() {
    this.parent = new Map();
  }

  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent.set(rootY, rootX);
    }
  }

  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    }
  }
}
