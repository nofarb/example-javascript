export function square(x) {
    return x * x;
  }
  
  export function cube(x) {
    return x * x * x;
  }
  
  export function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  