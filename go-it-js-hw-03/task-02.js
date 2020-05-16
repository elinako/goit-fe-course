const countProps = function (obj) {
  const objLength = Object.values(obj).length;
  return objLength;
};

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
