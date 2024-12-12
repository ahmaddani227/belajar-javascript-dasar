/*
            #FUNCTION GENERATOR
                -Function generator adala function yang digunakan untuk membuat data generator 
                -Generator adalah data yang bisa di iterasi sepertii Array
                -Untuk MEMBUAT FUNCTION GENERATOR , kita perlu menggunakan tanda * (Bintang) setelah kata function
                -Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan KATA KUNCI yield diikuti datanya

            #LAZY EVALUATION
                -Generator itu siftnya Lazy
                -Jadi artinya jika datanya belum kita ambil dari generator nya, maka Yield selanjutnya tidak akan dieksekusi
        */

// Function Generator hanya bisa di Iterasi tidak bisa diakses berupa index bahkan diubah datanya itu tidak bisa juga.

// FUNCTION GENERATOR SEDERHANA
function* createNames() {
  yield "Ahmad Dani";
  yield "Uzumaki Naruto";
  yield "Uchiha Sasuke";
  yield "Hatake Kakashi";
}

console.info(createNames());
const names = createNames();
for (const name of names) {
  console.info(name);
}

/*--------------------------------------------------------*/

// FUNCTION GENERATOR KOMPLEKS
// Lazy
function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 == 1) {
      console.info(`Yield ${i}`);
      yield i;
    }
  }
}

// const numbers = buatGanjil(100);
// for (const number of numbers) {
//     console.info(number);
// }

/*--------------------------------------------------------*/

// MENGGUNAKAN ARRAY
// eager
function buatGanjilArray(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 == 1) {
      console.info(`Yield ${i}`);
      result.push(i);
    }
  }
  return result;
}

// Ubah nama function nya ke buatGanjilArray() untuk melihat perbedaan Function Generator dengan Menggunakan Array Biasa
const numbers = buatGanjil(100);
// for (const number of numbers) {
//     console.info(number);
// }

/*--------------------------------------------------------*/

// LAZY GENERATOR
function* buatGanjilLazy(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 == 1) {
      console.info(`Perulangan ke ${i}`);
      yield i;
    }
  }
}

const numbersLazy = buatGanjilLazy(100);
console.info(numbersLazy.next().value); //Memanggil satu persatu atau Memanggil 1x
console.info(numbersLazy.next().value);
console.info(numbersLazy.next().value);
