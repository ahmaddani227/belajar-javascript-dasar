/*
            #TERNARY OPERATOR
                -Ternary operator adalah operator sederhana dari if statement
                -Ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika, false, maka nilai kedua diambil


        */

// MENGGUNAKAN IF STATEMENT
const nilai = 85;
let ucapan; //deklarasi variable
if (nilai >= 75) {
  ucapan = "Selamat Anda Lulus";
} else {
  ucapan = "Silahkan Coba Lagi";
}
document.writeln(`<p>${ucapan}</p>`);

// TERNARY OPERATOR
const nilai2 = 85;
const ucapan2 = nilai2 >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba LAgi";
document.writeln(`<p>${ucapan2}</p>`);
