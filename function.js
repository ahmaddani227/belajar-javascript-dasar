/*
            #FUNCTION
                -Function adalah blok kode program yang akan berjalan saat kita pe=anggil
                -Sebelumnya kita sudah menggunakan Function writeln() untuk menampikan tulisan di html
                -Untuk MEMBUAT FUNCTION , kita bisa menggunakan kata kunci function, lalu diikuti dengan nama function, kurung() dan diakhiri dengan blok {}
                -Kita bisa MEMANGGIL FUNCTION dengan menggunakan nama function dan diikuti dengan kurung()
                -Di bahasa pemrograman lain function ini disebut method

            NAMA FUNCTION TIDAK BOLEH MENGANDUNG SPASI.
            BIASANYA FUNCTION DIGUNAKAN UNTUK MEMBUAT KODE PROGRAM YANG SERING DIEKSEKUSI.
        */

// MEMBUAT FUNCTION
function sayHelloWorld() {
  document.writeln(`<p>Hello World</p>`);
}

// MEMANGGIL FUNCTION
sayHelloWorld();
sayHelloWorld(); //boleh berkali-kali
