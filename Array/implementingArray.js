// Creating array and its functionallity
class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    this.shiftItem(index);
    this.length--;
  }

  shiftItem(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray = new myArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(2);
newArray.push("are");
newArray.push("nice");

// console.log(newArray);
// newArray.pop();
console.log(newArray);
