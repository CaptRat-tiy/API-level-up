const mathy = (function () {

  const add = function(a, b) {
    return (a+b);
  }

  const subtract = function(a, b) {
    return (a-b);
  }

  const cheezeyPotatoes = function (a, b) {
    return (add(a,b) + " and " + subtract(a,b));
  }

  return {
    add: add,
    subtract: subtract,
    cheezeyPotatoes: cheezeyPotatoes,
  }
})();

module.exports = mathy;
