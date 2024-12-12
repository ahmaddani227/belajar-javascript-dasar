/*
            #ASSOSIATIVE ARRAY
                -Di bahasa pemrograman lain seperti PHP, kita bisa menggunakan index berupa tipe data lain selain number, misal String
                -Fitur ini biasanya disebut Assosiative Array atau Hash
                -Di JavaScript assosiative array tidak didukung
                -Jika kita memaksa memasukkan data bukan number di index Array, maka JavaScript akan meerubah tipe data Array menjadi Objeck, dan ini bisa berbahaya, karena beberapa operasi di array mungkin bisa berubah hasilnya.

            #TIPE DATA OBJECK
                -Tipe data objeck adalah tipe data yang mirip dengan tipe data array
                -Yang membedakan adalah index pada tipe data objeck bisa menggunakan String
                -Index di objeck biasanya disebut Attribute atau Properties, bukan index

        */

const objeckKosong = {};

const orang = {};

// Menambah atau Mengubah
orang["nama"] = "Ahmad Dani";
orang["kabubaten"] = "Bangkalan";
orang["provinsi"] = "Jawa Timur";
// orang.coba = "Coba"

console.table(orang);

// Menghapus
delete orang["provinsi"];
// delete orang.provinsi;

console.table(orang);

// MEMBUAT OBJECK DENGAN PROPERTIES
// "nama": "Ahmad Dani", Nama properties bisa mengunakan ""(Kutip dua)
const person = {
  nama: "Ahmad Dani",
  kabubaten: "Bangkalan",
  provinsi: "Jawa Timur",
};
console.table(person);

// Mengakses Property Objeck
// console.info(person["nama"]);
// Jarang digunakan dan tidak Direkomendasikan
// console.info(`Nama : ${person.nama}`);
//Lebih Gampang banget dibandingkan menggunakan [] Dan juga Direkomendasikan
console.info(`Nama : ${person.nama}`);
console.info(`Kabubaten : ${person.kabubaten}`);
console.info(`Provinsi : ${person.provinsi}`);
