// BIASA DIGUNAKAN UNTUK MENGAKSES SEMUA PROPERTY(nama property) DI OBJECK
/*
            #FOR IN
                -For in merupakan perulangan for yang digunkan untuk mengiterasi seluruh data property di objeck atau index di array
                -Walaupun For In dgunakan untuk Array, namun TIDAK DIREKOMENDASIKAN UNTUK ARRAY, karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of
        */

document.writeln(`<h3>For In di Objeck</h3>`);

const person = {
  firsName: "Ahmad",
  lastName: "Dani",
};
for (const property in person) {
  document.writeln(`<p>Property ${property} : ${person[property]}</p>`);
  // document.writeln(`${property}`)
}

/*-------------------------------------------------------------------------------------*/

document.writeln(`<h3>For In di Array</h3>`);

const names = ["Ahmad", "Dani"];
for (const index in names) {
  document.writeln(`<p>Index ${index} : ${names[index]}</p>`);
}
