/*
            Operasi perbandingan adalah operasi untuk membandinkan dua buah data.
            Operasi perbandingan adalah operasi yang menghasilkan nilai boolean(benar atau salah).
            Jika operasinya adalah benar, maka nilainya true.
            Jika operasinya adalah salah, maka nilainya false.
        */

/*
            >   Lebih Dari
            <   Kurang Dari
            >=  Lebih Dari Sama Dengan
            <=  Kurang Dari Sama Dengan
            ==  Sama dengan, Jika = nya 1 tertukar dg. mengubah VAriable
            === Sama dengan dan Sama Tipe
            !=  Tidak Sama Dengan
            !== Tidak Sama Dengan atau Tidak Sama Tipe
        */

document.writeln("<h1>Operator Perbandingan</h1>");

let result = 5 == "5"; // True
document.writeln("<p>" + result + "</p>");

result = 5 === "5"; // False
document.writeln("<p>" + result + "</p>");

result = 5 > 10; // False
document.writeln("<p>" + result + "</p>");

result = 5 < 10; // True
document.writeln("<p>" + result + "</p>");
