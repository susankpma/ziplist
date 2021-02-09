function zipList(list1, list2) {
  const newList = [];

  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
