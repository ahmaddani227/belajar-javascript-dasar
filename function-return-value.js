/*
            #FUNCTION RETURN VALUE
                -Secara default, function itu tidak menghsilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
                -Agar function bisa menghasilkan value, kita bisa gunakan kata kunci return didalam function nya.
                -Dan didalam block function, untuk bisa menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yangingin kita  hasilkan.
                -function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa gunakan array sebagai return value nya.

            #MENGHENTIKAN EKSEKUSI DENGAN RETURN
                -Saat kita menggunakan kata kunci return, maka kode setelah return terebut tidak akan dieksekusi
                -Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
        */

// MEMBUAT FUNCTION DENGAN PARAMETER DAN RETUEN VALUE
function sayHello(firsname, lastname) {
  const sayHello = `Hello ${firsname} ${lastname}`;
  return sayHello;
}

// MEMANGGIL FUNCTION DAN MENANGKAP RETURN VALUE NYA
const result = sayHello("Ahmad", "Dani");
document.writeln(`<p>${result}</p>`);

// FUNCTION RETURN VALUE BERBEDA-BEDA SESUAI KONDISI.
function getFinalScore(nilai) {
  if (nilai > 90) {
    return "A";
  } else if (nilai > 80) {
    return "B";
  } else if (nilai > 70) {
    return "C";
  } else if (nilai > 60) {
    return "D";
  } else {
    return "E";
  }
}

const nilai = getFinalScore(75);
document.writeln(`<p>Nilai : ${nilai}</p>`);

// CONTOH MENGHENTIKAN EKSEKUSI DENGAN RETURN
function isContains(array, searchValue) {
  for (const element of array) {
    // SETELAH MENEMUKAN (element === searchValue) KEMUDIAN MENEMUKAN return true; MAKA AKAN LANGSUNG BERHENTI ITERASI NYA DAN DAN AKAN MENGEMBALIKAN value true dari function isContains().
    console.info(`Iterasi(pengulangan) Element ${element}`);

    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const search = 9;
const found = isContains(array, search);
document.writeln(`<p>${found}</p>`);
// document.writeln(isContains([1,2,3,4,5,6,7,8,9,10], 5));
