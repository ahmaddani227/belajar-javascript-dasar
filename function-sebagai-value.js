/*
            FUNCTION SEBAGAI VALUE
                -Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi ketika kita panggil nama function nya, tapi bisa juga sebagai value
                -Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke funcction lainnya
        */

function sayHello(name) {
  document.writeln(`<p>Hello ${name}</p>`);
}
sayHello("Ahmad");

// MEMASUKKAN FUNCTION sayHello ke dalam variable Atau sebagai Value
// Function sayHello dimasukkan kedalam variable Tidak Perlu menggunakan () karena itu artinya memanggil Functionnya jika menggunakan ()
let say = sayHello;
say("Dani");

// FUNCTION DI PARAMETER
// Function bisa kita gunakan untuk kita kirim ke parameter
function giveMeName(callback) {
  // Nanti sayHello ini akan masuk sebagai PARAMETER callback. jadi, otomatis saat memanggil callback("Ahmad"); seakan-akan memangil FUNCTION sayHello("Ahmad"); begitu juga ketika menggunakan variable say sebagai parameter.
  callback("Ahmad Dani 227");
}
giveMeName(sayHello); //Tidak perlu () karena ingin mengirim function nya.
giveMeName(say);
