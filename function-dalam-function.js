/*
            #FUNCTION DALAM FUNCTION atau Istilahnya Nested Function
                -Tidak ada batasan dimana kita bisa membuat function 
                -Termasuk jika kita ingin membuat function didalam sebuah function, kita bisa melakukannya 
                -FUNCTION yang terdapat DIDALAM, kita SEBUT INNER FUNCTION
                -Inner Function hanya bisa diakses ditempat kita membuat functionnya, tidak bisa diakses dari luar functionnnya. 
        */

function outer() {
  function inner() {
    document.writeln(`<p>Inner</p>`);
    console.info("Inner");
  }

  // Memaggil Inner Function
  inner();
  inner();
}

outer();
inner(); //Error can not access inner function
