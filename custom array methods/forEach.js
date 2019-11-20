Array.prototype.customForEach = function (callback, thisArg) {
  callback.bind(thisArg)
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const arr = [1, 2, 3, 4, 5]
const arr2 = [0, 0, 0]

arr.forEach((item) => console.log(item * 2))

console.log('-------------');

arr.customForEach((item) => console.log(item * 2))



