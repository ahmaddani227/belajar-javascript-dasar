/*
            #OPERATOR LOGIKA DI NON BOOLEAN
                -Sebelumnya kita sudah tau bahwa operator logika AND(&&), OR(||) digunakan untuk dua data boolean
                -Namun berbeda di JavaScript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean.

            #OPERATOR OR(||) DI NON BOOLEAN
                SERING DIGUNAKAN, BANYAK PROGRAMER JAVASCRIPT MENGGUNAKAN OPERATOR OR(||) DI BUKAN YANG NON BOOLEAN

                -Operator logika OR(||), membaca dari kiri ke kanan
                -Operator ini akan mengambil nilai pertama yang truthy
                -Jika tidak ada satupun yang benilai truthy, maka yang terakkhir yang akan diambil
                
            #OPERATOR AND(&&) NON BOOLEAN
                -Operator logika AND(&&), membaca dari kiri ke kanan
                -Operator ini akan mengambil nilai pertama yang falsy
                -Jika tidak ada satupun yang benilai falsy, maka yang terakkhir yang akan diambil
        */

// OPERATOR LOGIKA OR(||), mengambil nilai pertama yang truthy, jika tidak ada akan mengambil terkahir

console.info("hello" || ""); //hello, karena '' falsy
console.info("" || []); //[], karena "" falsy
console.info("0" || "NOL"); //Sama-Sama Truthy maka yang diambil yang pertama
console.info(0 || "NOL"); // NOL, karena 0 falsy
console.info(null || "NULL"); //NULL, karena null adalah falsy
console.info(undefined || "undefined"); //UNDEFINED, karena undefined = falsy
console.info(0 || false); //Sama-Sama Falsy maka yang diambil yang terakhir

const person = {
  firsname: "Ahmad",
  lastname: "Dani",
};

const name = person.firsname || person.lastname;
console.info(name);

// --------------------------------------------------------------------------

// OPERATOR LOGIKA AND(&&),mengambil nilai falsy pertama, jika tidak ada akan mengambil yang terakhir

console.info("hello" && ""); //'' karena "hello" Truthy
console.info("" && []); // "" karena [] Truthy
console.info("0" && "NOL"); //Sama-Sama Truthy maka yang diambil yang terakhir
console.info(0 && "NOL"); // 0, karena NOL Truthy
console.info(null && "NUL"); //null, karena NULL adalah Truthy
console.info(undefined && "UNDEFINED"); //undefined, karena UNDEFINED = Truthy
console.info(0 && false); //Sama-Sama Falsy maka yang diambil yang pertama
