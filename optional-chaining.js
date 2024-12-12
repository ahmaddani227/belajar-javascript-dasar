/*
            #OPTIONAL CHAINING
                -Optional chaining operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property dari sebuah objeck dari data nullish(undefined & null)
                -Jika kita coba mengakses property dari sebuah objeck dari data nullish tanpa menggunakan optional chaining operator, maka akan terjasi error
        */

const person = {};

const person2 = {
  // address: {
  //     country: "Indonesia"
  // }
};

// TERJADI ERROR
// const country = person.address.country;
// document.writeln(`SUKSES`);
// document.writeln(`<p>${country}</p>`);
// document.writeln(`SUKSES`);

let say;

if (person.address !== undefined && person.address !== null) {
  say = person.address.country;
}
document.writeln(`GAGAL`);
document.writeln(`<p>${say}</p>`);

/*
         Mengggunakan tanda (? atau optional chaining) lebih mudah daripada harus mengcek menggunakan if statement dan fungsinya sama(seperti if statement di atas)
        */
say = person2?.address?.country;
document.writeln(`SUKSES`);
document.writeln(`<p>${say}</p>`);
