function bindToAnArg(func, arg) {

  return func.bind(func, arg);
}

function add(num1, num2) {
  return num1 + num2;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
