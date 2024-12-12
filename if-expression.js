/*
            #IF EXPRESSION
                -Dalam JavaScript, if adalah salah satu kata kunci yang digunakan untuk percabangan
                -Percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
                -Hampir di semua bahasa pemrograman mendukung if expression
            #ELSE EXPRESSION
                -Blok if akan dieksekusi ketika kondisi if bernilai true
                -Kadang kita ingin melakukan eksekusi program tertentu jika if bernilai false
                -Hal ini bisa dilakukan menggunakan else expression
            #ELSE IF EXPRESSION
                -Kadang dalam if, kita butuh membuat beberaoa kondisi
                -Kasus seperti ini, di JavaScript bisa menggunakan Else if expression
        */

const examValue = 85;
if (examValue > 80) {
  document.writeln("<p>Good Joob : A</p>");
} else if (examValue > 70) {
  document.writeln("<p>Good Joob : B</p>");
} else if (examValue > 60) {
  document.writeln("<p>Good Joob : C</p>");
} else {
  document.writeln("<p>Try Again Next Year</p>");
}
