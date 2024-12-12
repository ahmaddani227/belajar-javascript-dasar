/*
    #BREAK DAN CONTINUE
        -Pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
        -Sama dengna perulangan, break juga digunakan untuk menghentikan seluruh perulangan.
        -Namun berbeda dengan continue, continue digunakan untuk menghentikaan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya
*/

let counter = 1;
while (true) {
  document.writeln(`<p>Perulangan ke-${counter}</p>`);
  counter++;

  if (counter > 10) {
    break;
  }
}
