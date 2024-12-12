/*
            #DEBUGGER
                -Debuggrer digunakan untuk melakukan proses Debugging
                -Debugging adalah proses mencari bug(masalah) yang bisa terjadi di kode program kita
                -Dengan Debugger kita bisa menghentikan kode program di posisi yang kita inginkan(breakpoint), lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti
        */

function createFullName(firstname, middlename, lastname) {
  // debugger;
  const fullname = `${firstname} ${middlename} ${lastname}`;
  return fullname;
}

const name = createFullName("Naufal", "Muhammad", "Zaky");
console.info(name);

function sum(...numbers) {
  // debugger;
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.info(sum(1, 1, 1, 1, 1));
