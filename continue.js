/*
            #BREAK DAN CONTINUE
                -Pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
                -Sama dengna perulangan, break juga digunakan untuk menghentikan seluruh perulangan.
                -Namun berbeda dengan continue, continue digunakan untuk menghentikaan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya
        */

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    continue;
    // Kalo di for loop kata kunci Continue tetap akan mengeksekusi Post statement
  }

  document.writeln(`<p>Perulangan Ganjil ${i}</p>`);
}
