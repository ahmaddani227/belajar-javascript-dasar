/*
            #GETTER DAN SETTER
                -Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data(Getter) dan mengubah data(Setter) pada sebuah property di Objeck
                -Dengan menggunakan Getter dan Setter, kia bisa melakukan hal apapun dalam function sebelum sebuah property di akses di akses atau diubah, misal menambah validasi dan lain-lain

            # get adalah KATA KUNCI untuk MEMBUAT GETTER
                -Jadi dengan menggunakan getter seakan akan mentransform(mengubah) dari yang awal nya mengakses property atau attriute biasa menjadi sebuah function. Dengan begitu kalo ingin memasukkan kode apapun lebih bebas.
        */

// GETTER
const person = {
  firsName: "Ahmad",
  lastName: "Dani",
  fName: function () {
    // FUNCTION
    return `${this.firsName} ${this.lastName}`;
  },
  get fullName() {
    // GETTER. Tidak perlu menggunakan kata kunci function
    return `${this.firsName} ${this.lastName}`;
  },
  set fullName(val) {
    // SETTER.
    const array = val.split(" ");
    this.firsName = array[0];
    this.lastName = array[1];
  },
};

/*  Menggunakan Function.
        Bisa juga menggunakan function. Namun, problem nya ketika kita mau mengakses kita Gunakan
        console.info(person.fName()); jadi ngakses nya ini sebuah Function bukan lagi sebuah Property biasa.
        */
console.info(person.fName());

// GETTER. otomatis memanggil get fullName()
console.info(person.fullName);

// SETTER. seakan akan yang diubah property nya tapi yang diakses adalah setter function-nya.
person.fullName = "Uzumaki Naruto";
console.table(person);

person.fullName = "Uchiha Sasuke";
console.table(person);

person.fullName = "Ahmad Dani";
console.table(person);
