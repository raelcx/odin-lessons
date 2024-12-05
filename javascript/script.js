function isOdd(num) {
    return num % 2 !== 0;
  }
  const arr = [1, 2, 3, 4, 5];
  const oddNums = arr.filter(isOdd);
  console.log(oddNums); // Outputs [1, 3, 5];
  console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected

  

  const arr = [1, 2, 3, 4, 5];
  const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  console.log(productOfAllNums); // Outputs 120;
  console.log(arr); // Outputs [1, 2, 3, 4, 5]
  