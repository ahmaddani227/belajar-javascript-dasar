/*
            Operator Logika adalah operator untuk dua buah data boolean.
            Hasil dari operator logika boolean lagi.
            ----------------------------------------------
            && Dan
            || Atau
            !  Kebalikan
            ----------------------------------------------
            && kalo di kanan dan dikiri-nya ada yang false salah satu saja maka nilai nya false. Jadi dia akan benilai true jika dikanan dan dikiri nya bernilai teru.

            true && true true
            true && false false
            false && true false
            false && false false
            ---------------------------------------------
            || kalo di kanan dan dikiri-nya ada yang false salah satu saja maka nilai nya true. Jadi dia akan benilai false jika dikanan dan dikiri nya bernilai false
            
            true || true true
            true || false true
            false || true true
            false || false false
            ---------------------------------------------
            OPERATOR UNARY (Kebalikan)!
            dianggap Operator Uanry karena cuma digunakan untuk 1 data bukan 2 data

            ! true False
            ! false True
        */

document.writeln("<h1>Operator Logika</h1>");

const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
document.writeln("<p>" + lulus + "</p>");
