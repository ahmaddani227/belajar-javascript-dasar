/*
            #ANONYMOUS FUNCTION
                -Sebelumnya kita selalu membuat Function dengan Nama
                -Kita juga bisa membuat FUNCTION TANPA NAMA FUNCTION, atau istilahnya ANONYMOUS FUNCTION(Function Tanpa Nama)
                -Kita bisa BUAT Anonymous Function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter.

            #MEMBUAT ANONYMPUS FUNCTION ADA DUA CARA YAITU 
                1. MASUKKAN KE DALAM SEBUAH VARIABLE
                2. MASUKKAN KE DALAM PARAMETER
        */

// ANONYMOUS FUNCTION YANG DIMASUKKAN KE DALAM VARIBLE
let say = function (name) {
  document.writeln(`<p>Hello ${name}</p>`);
};
say("Ahmad");

// ANONYMOUS FUNCTION YANG DIMASUKKAN KE DALAM PARAMETER
function giveMeName(callback) {
  callback("Dani"); //callback = manggil anonymous function
}
// memanggil function giveMeName yang berisi parameter Anonymous Function
giveMeName(function (name) {
  document.writeln(`<p>Hai ${name}</p>`);
});
