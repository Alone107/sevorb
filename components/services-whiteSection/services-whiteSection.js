var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let set = new Set();

  iterable = iterable.split("");

  let i = 0;
  while (i < iterable.length) {
    set.add(iterable[i]);
    i++;
  }
  console.log(set);
};

uniqueInOrder("AAAABBBCCDAABBB");
