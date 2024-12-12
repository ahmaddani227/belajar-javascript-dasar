/*
            #FOR LOOP
                -For adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan
                -Blok kode yang terdapat didalam for akan selalu diulangi selama kondisi for terpenuhi

            #SINTAKS PENULISAN FOR
                for( init statement; kondisi; post statement ){
                    blok perulangan
                }

                -Init statement akan dieksekusi hanya sekali di awal sebelum perulangan 
                -Kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true perulangan akan dilakukan, jika false perungan akan berhenti
                -Post statement akan dieksekusi setiap kali diakhir perulangan 
                -Init statement, kondisi dan Post Statemnt tidak wajib diisi, jika kondisi tidak diisi, berarti kondisi selalu bernilai true 

        */

for (let counter = 1; counter <= 10; counter++) {
  document.writeln(`<p>Perulangan ke ${counter}</p>`);
}
