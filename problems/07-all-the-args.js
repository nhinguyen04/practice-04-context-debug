function allTheArgs(func, ...args) {
  return func.bind(null, ...args);
}

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
