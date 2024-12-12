document.writeln("Ahmad Dani");
document.writeln("</br>");
document.writeln("Belajar JavaScript di PZN");
document.writeln("</br>");
document.writeln("");
document.writeln("</br>");

// Menambahkan String(String ConCat)
document.writeln("Nama : " + "Ahmad Dani");

document.writeln("</br>");
document.writeln("Escape Sequence");
document.writeln("</br>");
//Escape Sequence
/*
        JavaScript mendukung escape sequence di string. Escape Sequence merupakan karakter khusus, seperti TAB, EENTER,"(kutip dua) dll.
        */
/*
        \n = ENTER
        \t = TAB
        \' = '
        \" = "
        \\ = \
        */

/* Secara default writeln di belakang nya ada Enter jika ingin satu baris pake write*/
document.writeln("<textarea cols='100' rows='10'>");
document.write("\tEsacep Sequaence");
document.write("\nNama \nAhmad \nDani\n");
document.write("\\Belajar\n");
document.write('"JavaScript dasar"\n');
document.write("'Di PZN'");
document.writeln("</textarea>");
