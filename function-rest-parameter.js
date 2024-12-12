/*
            #FUNCTION REST PARAMETER
                -Rest parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan dikonversi menjadi array
                -Untuk membuat rest paramater, Ada ketentuannya
                -Rest parameter hanya boleh ada di satu function, tidak boleh lebih dari satu
                -Rest parameter hanya boleh berada di posisi paling akihr, tidak boleh didepan atau ditengah, kecuali memang hanya ada 1 parameter 
                -Di bahasa pemrogrmaman lain, ada juga yang bilang ini adalah VARIABLE ARGUMENT

            #SPREAD SYNTAX
                -Kadang kita terlanjur memiliki data data array
                -Tapi untungnya kita juga bisa mengirim Array ke Rest Parameter
                -Kita bisa gunakan ...(titik tiga kali) diikuti dengan array nya ketika memanggil function
                -Fitur ini dinamakan fitur Spread Syntax

            #ARGUMNTS OBJECK (FITUR LAMA)
                TIDAK DISARANKAN KARENA TIDAK BISA MENENTUKAN PARAMETR PERTAMA ITU APA KEDUA, KETIGA DST.

                -Sebelum ada fitur Rest Parameter, di JavaScript sudah ada fitur yang bernama Argumnts Objeck
                -Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan objeck bernama argumnts
                -Argumnts secara otomatis bisa digunkan di Function
                -Namun perlu diingat, bahwa untuk JavaScript saat ini, Lebih baik DISARANKAN menggunakan Rest Parameter dibanding arguments objeck
        */

// REST PARAMETER
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  document.writeln(`<p>Total ${name} is ${total}</p>`);
}

sum("Orange", 2, 3, 4, 5, 6, 7, 8, 9);

// SPREAD SYNTAX DI REST PARAMETER
const values = [10, 10, 10, 10, 10];
sum("Banana", ...[10, 10, 10, 10, 10]); //...array akan dikonversi ke Rest Parameter yang awalnya adalah Array
sum("Apple", ...values);

// ARGUMENTS OBJECK(FITUR LAMA)
function oldSum() {
  console.info(arguments);
  let total = 0;
  for (const item of arguments) {
    total += item;
  }
  document.writeln(`<p>Arguments Objeck, Total is ${total}</p>`);
}
oldSum(1, 2, 3, 4, 5, 6, 7);
