/*
            #OPTIONAL PARAMETER
                -Secara default, parameter di function itu optional
                -Artinya kita tidak wajib mengisi value nya ketika memanggil function
                -Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined
        */

function sayHello(firsname, lastname, gakAda) {
  console.info(firsname);
  console.info(lastname);
  console.info(gakAda);
}

sayHello();
sayHello("Ahmad");
sayHello("Ahmad", "Dani");
sayHello("Sasuke", "Sakura", "Naruto");
sayHello("Sasuke", "Sakura", "Naruto", "Sai");
