const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  let best = entries[0][1];
  let bestKey = entries[0][0];
  for (let i = 1; i < entries.length; i += 1) {
    if (entries[i][1] > entries[0][1]) {
      best = entries[i][1];
      bestKey = entries[i][0];
    }
  }

  return bestKey;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
