/*
            -Kita sudah tau bahwa untuk menambahkan string dengan data lain, kita bisa menggunkan operator plus(+).
            -Namun pada kasus tertenru, penggunaan operator plus(+) menyulitkan, apalagi jika dalam jumlah banyak.
            -JavaScript memliki fitur yang bernama String Template, dimana kita bisa mensibtitusi data dari luar String kedalam String, seperti mengamil data Variable, atau bahkan melakukan operasi matematika
            -Untuk menggunkan String Template, cara pembuatan String nya harus menggunkan `(backtick), bukan '(petik satu) atau "(petik dua). 
            ---------------------------------------------------------------
            CARA BIASA
            const nama = "Ahmad Dani";
            const template = "Nama : " + nama;

            CARA STRING TEMPLATE
            const nama = "Ahmad Dani";
            const template = `Nama : ${nama}`;

            #MULTILINE STRING
                - String Template Juga bisa digunakan untuk membuat string multiline(Beberapa Baris),
                  String menggunakan '(petik satu), "(petik dua) tidak bisa Multiline(tidak bisa beberapo baris hanya Bisa Satu Baris).
                -Kita cukup Tambah Enter di Teks-nya.
                -String Template Support Multiline String.
        */

console.info("String Template, Subtitusi Variable");
const nama = "Ahmad Dani";
const template = `Nama : ${nama} ${227}`;
console.info(template);

console.info("Expression di String Template atau Subtitusi Expression");
const nilai = 85;
const template2 = `Nama : ${nama}, Lulus ${nilai > 75}`;
console.info(template2);

console.info("Multiline String");
let multiLineString = `Hai Nama Saya Ahmad Dani,
Sekarang Saya Belajar JavaScript dari Dasar di Channel PZN
dan juga saya Membagi waktu untuk Belajar Framework Vue JS di Channel baledemy.
        `;
document.writeln("<pre>");
document.writeln(multiLineString);
document.writeln("</pre>");
