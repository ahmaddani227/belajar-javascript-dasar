/*
            #SCOPE
                -Scope merupakan area akses sebuah data 
                -Ada dua JENIS SCOPE, global scope dan local scope
                -Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut 
                -Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa diakses di lokal scope tersebut  atau di scope local dibawahnya(dalam kasus function dalam function). 
        */

// GLOBAL SCOPE
// global scope(Paling luar atau Paling Atas)
let counter = 0;

// global scope dan isi block function nya {} itu local scope
function hitMe() {
  // local scope function hitMe
  counter++; //we can access
}

// global scope dan isi block function nya {} itu local scope
function other() {
  // local scope
  //hitMe(); //bisa karena Function hitMe() global scope
}

hitMe();
hitMe();
document.writeln(`<p>${counter}</p>`);
console.info(counter);

/*---------------------------------------------------------------*/

// LOCAL SCOPE
function first() {
  // local scope first
  let firstVariable = "First";
  console.info(firstVariable); //hanya bisa diakses di sini
}
function second() {
  // local scope second
  let secondVariable = "Second";
  //console.info(firsVariable); //ERROR.
  /* walaupun ini didalam local scope bukan berarti bisa saling mengakses. aturan local scope hanya bisa diakses di local scope itu sendiri */
}

first();
second();

// global scope
//console.info(firsVariable); //ERROR
//console.info(secondVariable); //ERROR

/*---------------------------------------------------------------*/
// NESTED FUNCTION SCOPE
function firstNested() {
  let firsVariableNested = "First Nested";

  function secondNested() {
    console.info(firsVariableNested); //Bisa. can access local scope first
  }

  secondNested();
}

firstNested();
