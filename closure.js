/*
            #CLOSURE(Jarang)
                -Closure merupakan kombinasi function dan bundel referensi ke data disekitarnya
                -Oke. Agak membingungkan emang, apalagi untuk yang baru pertama belajar 
                -Kita sudah tau bahwa local scope tidak bisa diakses diluar scope nya
                -Dengan kemampuan Closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope nya
        */

function createAdder(value) {
  const owner = "Ahmad";

  function add(param) {
    console.info(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);

// seakam akan menjadi seperti
// function addTwo(param) {
//     console.info("Ahmad");
//     return 2 + param;
// }

console.info(addTwo(10));
console.info(addTwo(20));
