function eleInArrList(ele, arr) {
  let arrlen = arr.length;
  for (x of arr) {
    for (y of x) {
      if (y == ele) {
        console.log(ele + " is present in " + x);
      }
    }
  }
}

const arrList = ["alience", "salloon", "var", "boll", "elegant"];
eleInArrList("p", arrList);
