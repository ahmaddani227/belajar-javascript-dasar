/*
            #SWITCH STATEMENT
                -Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan ==
                -Switch adalah stement percabangan yang sama dengan if, namun lebih sedrhana cara pembuatan nya
                -Kondisi di switch statement hanya untuk perbandingan ==

            
        */

const nilai = "A";
switch (nilai) {
  case "A":
    document.writeln("<p>Wow Anda Lulus dengan Baik</p>");
    break;
  case "B":
  case "C":
    document.writeln("<p>Anda Lulus</p>");
    break;
  case "D":
    document.writeln("<p>Anda tidak Lulus</p>");
    break;
  default:
    document.writeln("<p>Mungkin Anda salah Jurusan</p>");
    break;
}
