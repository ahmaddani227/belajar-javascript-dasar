/*
            -Saat membuat aplikasi, kadang kita input dari pengguna selalu dalam bentuk string.
            -sedangkan kita ingin mengelola data-nya dalam bentuk Number.
            -Maka sangat disarankan untuk melakukan konversi tipe data.
            ------------------------------------------------
            #MELAKUKAN KONVERSI STRING DAN NUMBER.
                Function            Keterangan
                parseInt(string)    Menkonversi dari string ke number(bilangan bulat).
                parseFloat(string)  Menkonversi dari string ke number(bilangan pecahan).
                Number(string)      Menkonversi dari string ke number(bilangan bulat atau pecahan).
                number.toString()   Menkonversi dari Number ke String.

            int adalah bilangan bulat.
            ------------------------------------------------
            #NaN
                -Bagaimana jika ternyata data string yang kita konversi bukanlah data yang valid?
                -Jika data string yang kita coba lakukan konversi bukan lah data yang valid, maka hasil dari konversi tersebut adalah NaN(Not a Number)
                -NaN adalah number special yang menyebutkan bahwa ini bukanlah Number
                -Jika NaN dioperasikan dengan data number lainynya, maka hasilnya akan menjadi NaN lagi.
            #isNaN() Function
                -Kadang kita ingin mengcek apakah sebuah Number itu NaN atau bukan
                -Untuk melakukan pengecekan tersebut, kita bisa mengunakan functionn isNaN(number).
                -Hasilnya brupa data boolean, true jika NaN, false jika bukan.
        */

const value1 = parseInt("1"); //Dikonversi menjadi bilangan bulat.
const value2 = 1;
const sum = value1 + value2;
document.writeln(sum);

document.writeln(`<p>parseInt</p>`);
document.writeln(`<p>${parseInt("1.1")}</p>`);
document.writeln(`<p>${parseInt("1.9")}</p>`);
//Dikonversi menjadi bilangan bulat, maka hasilnya 1 nilai Pecahan-nya dihiraukan bukan di Bulatkan

document.writeln(`<p>parseFloat</p>`);
document.writeln(`<p>${parseFloat("1.1")}</p>`); //1.1
document.writeln(`<p>${parseFloat("1")}</p>`); //1

document.writeln(`<p>Number</p>`);
document.writeln(`<p>${Number("1.1")}</p>`); //1.1

// Konversi dari Number ke String.
document.writeln(`<p>Konversi Number ke String</p>`);
const a = 1;
const b = 1;
const total = a.toString() + b.toString();
document.writeln(`<p>${total}</p>`);

// NaN
// parseInt() dan parseFloat() akan mentolelir kesalahan kalo kesalahan nya  ada dibelkang kalo didepan dia tidak mentolelir
document.writeln(`<p>#NaN</p>`);
document.writeln(`<p>parseInt() dan parseFloat()</p>`);
document.writeln(`<p>${parseInt("1salah")}</p>`); //NaN
document.writeln(`<p>${parseInt("salah")}</p>`); //NaN
document.writeln(`<p>${parseFloat("1.1text")}</p>`); //1.1

// Number() tidak akan mentolelir kesalahan pada data
document.writeln(`<p>Number()</p>`);
document.writeln(`<p>${Number("1.1ups")}</p>`); //NaN
document.writeln(`<p>${Number("1x")}</p>`); //NaN
document.writeln(`<p>${Number("bukan Number")}</p>`); //NaN

// Operasi pada NaN
// Jadi NaN kalo dioperasikan dengan data Apapun dia akan menghasilkan NaN lagi, jadi sudah tidak bisa diapa-apakan lagi
document.writeln(`<p>#Operasi pada NaN</p>`);
const nilai1 = Number("Salah"); //NaN
const jumlah = nilai1 + 100; //NaN
document.writeln(`<p>${jumlah}</p>`);

// isNaN() Function
// Hasilnya brupa data boolean, true jika NaN, false jika bukan.
document.writeln(`<p>#isNaN() Function</p>`);
document.writeln(`<p>${isNaN(nilai1)}</p>`);
document.writeln(`<p>${isNaN(100)}</p>`);
document.writeln(`<p>${isNaN(NaN)}</p>`);
