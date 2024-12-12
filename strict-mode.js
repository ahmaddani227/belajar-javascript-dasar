/*
            #STRICT MODE
                -Saat kita menjalankan kode program JavaScript, secara default kode program kita berjalan dalam mode tidak Strict, atau istilahnya Sloppy Mode
                -Pada ECMAScript 5, diperkenalkan Mode Strict, dimana ketika Mode Strict dijalakan, maka akan merubah beberapa cara kerja di JavaScript, seperti :
                    -Merubah beberapa JavaScript error dari yang tadinya slient error, menjadi throw error(terlihat)
                    -Memperbaiki beberapa kesalahan engine JavaScript untuk Optimasi
                    -Menolak beberap kode printah yang kedepannya akan digunakan ECMAScript
                -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode 

            #CARA MENYALAKAN STRICT MODE
                -Untuk menyalakan Strict Mode, kita bisa menambhakan `use strict` pada baris awal JavaScript
                -Atau bisa juga ditambahkan di awal function kita
        */

function useStrictMode() {
  "use strict";

  const peson = {
    firstname: "Ahmad",
  };

  // Ketika menjalankan Mode Strict with statement dilarang
  // Error
  with (peson) {
    console.info(firstname);
  }
}

useStrictMode();
