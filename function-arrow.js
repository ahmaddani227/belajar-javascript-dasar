/*
            #ARROW FUNCTION
                -Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
                -Namun terdapat limitasi(kekurangan) dan juga tidak bisa digunakan disemua situasi
                -Dinamakan Arrow Function karena menggunakan tanda => (Seperti Anak Panah)
                -Berikut contoh beberapa KEKURANGAN ARROW FUNCTION :
                    -Tidak memiliki fitur Argument Objeck 
                    -TIdak bisa menggunakan Function Generator 
                    -Tidak bisa mengakses this(Yang nanti akan dibahas di function di objeck)
                    -TIdak bisa mengakses super(Yang nanti akan dibahas di JavaScript Objeck Oriented Programming)

            ARROW FUNCTION MIRIP ANONYMOUS FUNCTION.JADI TIDAK BISA BERDIRI SENDIRI HARUS DIMASUKKAN KE DALAM VARIABLE ATAU PARAMETER

            #ARROW FUNCTION TANPA BLOCK
                -Jika sebuah Arrow Funcion isinya sederhana, misalnya hanya satu baris 
                -Kita bisa membuat Arrow Function tanpa harus menggunakan block

            #ARROW FUNCTION RETURN VAUE
                -Arrow Function bisa mengembalikan value, sama seperti function biasa
                -Jika MENGGUNAKAN BLOCK, maka kita perlu menggunakan kata kunci return
                -Jika TIDAK MENGGUNAKAN BLOCK, kita tidak perlu menggunakan kata kunci return

            #ARROW FUNCTION TANPA KURUNG PARAMETER
                -Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung parameter
                -Jika tidak ada parameternya maka wajib menggunakan () apalagi parameternya lebih dari satu. karena menggunanakn tanda koma ','

            #ARROW FUNCTION SEBAGAI PARAMETER
                -Karena Arrow Function seperti Anonymous Function
                -Jadi kita juga bisa menggunakan Arrow Function sebagai Parameter di function lain
        */

// ARROW FUNCTION
const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.info(say);
};

sayHello("Ahmad");

/*----------------------------------------------------------*/

// ARROW FUNCTION TANPA BLOCK
const sayHello2 = (name) => console.info(`Hello ${name}`);
sayHello2("Dani");

/*----------------------------------------------------------*/

// ARROW FUNCTION RETURN VALUE

// menggunakan bock
// const sum = (first, second) => {
//     return first + second;
// }

// tanpa menggunakan block
const sum = (first, second) => first + second;
console.info(sum(10, 6));

/*----------------------------------------------------------*/

// ARROW FUNCTION TANPA KURUNG PARAMETER
const hello = (name) => console.info(`Hello ${name}`);
hello("Naruto");

/*----------------------------------------------------------*/

// ARROW FUNCTION SEBAGAI PARAMETER
function giveMeName(callback) {
  callback("Sasuke");
}

// giveMeName((name) => console.info(`Hello ${name}`));
giveMeName((name) => console.info(`Hello ${name}`));
