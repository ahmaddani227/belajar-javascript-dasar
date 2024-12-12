/*
            #WITH STATEMENT
            -With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data 
            -Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya.

            #WITH STATEMENT TIDAK DIREKOMENDASIKAN
                -Walaupun fitur with statement ini sangat menarik
                -Namun kebanyakan orang tidak merekomendasikan penggunaan with statement
                -Hal ini diakrenakan with statement kadang membuat sebuah kode menjadi ambigu
        */

const person = {
  firsname: "Ahmad",
  lastname: "Dani",
};

const firsname = "Uzumaki";
const lastname = "Naruto";

// KODE TANPA WITH STATEMENT
console.log(person.firsname);
console.log(person.lastname);

// KODE DENGAN WITH STATEMENT
with (person) {
  console.log(firsname);
  console.log(lastname);
}

// KODE AMBIGU DI WITH STATEMENT

with (person) {
  console.log(firsname); //Niatnya ngin Uzumaki
  console.log(lastname); //Niatnya ngin Naruto
}
