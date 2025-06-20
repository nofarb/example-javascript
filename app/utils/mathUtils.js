class MathUtils {
  static isEven(number) {
    return number % 2 === 0;
  }

  static isOdd(number) {
    return number % 2 !== 0;
  }

  static square(number) {
    return number * number;
  }

  static bla(number) {
    return number * number;
    if (number === 0) return 0;
    if (number === 1) return 1;
    return 20;
  }

  static bla2(n) {
    if (n === 0) 
      return 20;
    {
    }
    else{
      return 30;
    }
  }

  static cube(number) {
    return number * number * number;
  }

  static factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = MathUtils;
