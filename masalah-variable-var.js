/*
            #MASALAH DI VARIABLE VAR
                -Penggunaan var sudah tidak direkomendasikan lagi dan diganti dengan let
                -Kenapa ?
                -Alasan var tidak direkomendasikan digunakan lagi adalah, karena var tiak memiliki block scope, artinya dia tidak mengikat ke local scope.
                -Karena masalah ini, var bisa tidak terprediksi 
        */

// MENGGUNAKAN LET
let i = 20; //Global Scope

for (let i = 0; i < 10; i++) {
  /* Kalo tidak menggunakan let berarti mengubah let i yang di Global Scope. Jadi kalo menggunakan let seakan-akan membuat variable yang baru walaupun nama Variable nya sama. Selama dia beda Scope, dia tidak akan mengubah data yang di Scope yang berbeda. */
  console.info(`Local : ${i}`); //Local Scope. Hasilnya 0 sampai 9
}

console.info(`Global : ${i}`); // Global Scope. Hasilnya 20

/*------------------------------------------------------------------------------------*/

// MENGGUNAKAN VAR
console.info("Menggunakan var");

var v = 20;

for (var v = 0; v < 10; v++) {
  console.info(`Local var : ${v}`);
}

console.info(`Global var : ${v}`);
