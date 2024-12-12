/*
            #FOR OF
                -Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of, ini digunakan untuk melakukan iterasi terhadap isi value dari iterable objeck, seperti Array, String dan lain-lain
                -For Of TIDAK BISA DIGUNAKAN UNTUK MELAKUKAN ITERASI DATA DI OBJECK, karena Objeck bukanlah iterable.
        */

const names = ["Ahmad", "Dani"];
for (const name of names) {
  document.writeln(`<p>${name}</p>`);
}

const fullName = "Ahmad Dani";
for (const character of fullName) {
  document.writeln(`<p>${character}</p>`);
}
