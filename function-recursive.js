/*
            #FUNCTION RECURSIVE 
                -Recursive Function adalah kemampuan function memanggil function dirinya sendiri
                -Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan Recursive Function, seperti contohnya kasus Factorial
        */

// FAKTORIAL MENGGUNAKAN PERULANGAN
function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    // document.writeln(`<p>${result} * ${i} = ${result *= i}</p>`);
    result *= i;
  }
  return result;
}

console.info(factorial(5));
console.info(1 * 1 * 2 * 3 * 4 * 5);

/*------------------------------------------------------------------*/

// FAKTORIAL MENGGUNAKAN FUNCTION RECURSIVE
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
console.info(factorialRecursive(5));
// 5 * factorialRecuesive(4) 4 -> karena value dikurangi 1
// 5 * 4 * factorialRecuesive(3)
// 5 * 4 * 3 * factorialRecuesive(2)
// 5 * 4 * 3 * 2 * 1
console.info(5 * 4 * 3 * 2 * 1);
