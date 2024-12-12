/*
            #UNDEFINED
                -Undefined adalah sebuah kata kunci di JavaScript
                -Undefined adalah sebuah tipe data
                -Sebuah variable yang belum ditmbakan nilai, maka artinya veriable tersebut merupakan tipe undefined
                -Kadang untuk Programmer JavaScript pemula undefined ini emang agak sedikit membingungkan 
                -Undefined itu berbeda dengan null di bahasa pemrograman lain

            UNDEFINED ITU ADALAH DATA YANG BELUM KITA DEFINISIKAN ISINYA
        */

//  VARIABLE
let name;
if (name === undefined) {
  console.info("Undefined");
  alert("UNDEFINED");
} else {
  console.info("Defined");
  alert("DEFINED");
}

// ARRAY
const names = ["Ahmad", "Dani"];
// document.writeln(names[2]);
if (names[2] === undefined) {
  console.info("Undefined");
  alert("ARRAY ANDEFINED");
} else {
  console.info("Defined");
  alert("ARRAY DEFINED");
}

// OBJECK
const person = {};
if (person.name === undefined) {
  console.info("Objeck Undefined");
  alert("OBJECK UNDEFINED");
} else {
  console.info("Objeck Defined");
  alert(`Hello ${person.name}`);
}
