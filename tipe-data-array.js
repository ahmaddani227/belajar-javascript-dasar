/*
            -Array adlah tipe data yang berisikan kumpulan data
            -Array di JavaScript memiliki sifat dinamis, artinya datanya bisa bertambah dengan sendirinya saat kita memasukkan data ke dalam Array

            #CARA KERJA ARRAY
                -Setiap data di Array akan disimpan dalam posisi berurutan, dimana urutan pertama dimulai dari nomor 0
                -Setiap kita menambah data di Array, otomatis data akan disimpan diurutan terakhir
                -Urutan data di array kita sebut index

            #OPERASI DI ARRAY
                array.push(value)       Menambah data ke Array
                array.length            Untuk mendapatkan panjang Array 
                array[index]            Mendapatkan data di posisi index
                array[index] = value    Mengubah data di posisi index
                delete array[index]     Menghapus data di posisi index, namun index tidak bergeser

            #PERLU DIINGAT
                -Data didalam Array tidak ada batasannya harus data apa
                -Jadi kita bisa memasukkan data apapun ke dalam Array
                -Bahkan kita bisa memasukkan Array kedalam Array(Multi Demensional Array) jika kita mau
            
                Meskipun sudah dihapus bisa digunakan lagi. Jadi datanya dihilangkan tapi bukan berarti index-nya Hilang juga. Jadi masih bisa mengakses index nya.
            
        */

let arrayKosong = [];
let arrayNama = ["Ahmad", "Dani", 227];

// MENAMBAH ARRAY
const names = [];
names.push("Ahmad");
names.push("Dani", 227); //Memasukkan langsung lebih dari satu value
console.table(names);

// OPERASI DI ARRAY
console.info(names.length); //Panjang Array

console.info(names[0]); //Mendapatkan data di posisi index 0

names[0] = "Dani227"; // Mengubah data di posisi index 0
console.table(names);

delete names[1]; /*Meskipun sudah dihapus bisa digunakan lagi. Jadi datanya dihilangkan tapi bukan berarti index-nya Hilang juga. Jadi masih bisa mengakses index nya.*/
console.table(names);

names.push("Ahmad");
names.push(["Ahmad", "Dani", 227]);
names[1] = "Diubah Lagi";
console.table(names);
