var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

console.log(obj1, obj2, obj3);
obj1.value = 5;
console.log(obj1, obj2, obj3);
