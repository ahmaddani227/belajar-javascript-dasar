/*
            #FUNCTION PARAMETER
                -Kita bisa mengirim informasi(data) ke function yang ingin kita panggil 
                -Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah kita buat
                -Parameter ditempatkan didalam kurun() di deklarasi method
                -Parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah dengan tanda koma

            PEMBUATAN NAMA PARAMETER SEPERTI NAMA VARIABLE, CUMA BEDANYA TIDAK PERLU MENGGUNAKAN (var, let, dan const).
        */

// MEMBUAT FUNCTION DENGAN PARAMETER
function sayHello(firsname, lastname) {
  document.writeln(`<p>Hello ${firsname} ${lastname}</p>`);
}

// MEMANGGIL FUNCTION DENGAN PARAMETER
sayHello("Ahmad", "Dani");
sayHello("Uzumaki", "Naruto");
