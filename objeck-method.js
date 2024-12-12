/*
            #OBJECK METHOD
                -Pada tipe data objeck, kita sudah membahas tentang property di objeck
                -Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di objeck
                -Cara pembuaatannya pun sama dengan function sebagai value 
                -Function di obajeck kadang disebut juga sebagai Objeck Method
        */

// CARA 1
function func(name) {
  alert(`Hello ${name}`);
}

const person = {
  name: "Ahmad",
  //Anonymous Function
  sayHello: function (name) {
    alert(`Hello ${name}`);
  },
  // Arrow Function
  arrowFunc: (name) => alert(`Hello ${name}`),
  // Deklarasi Function Diluar
  sayHello2: func,
};

person.sayHello(`Dani`);
person.arrowFunc(`Ahmad`);
person.sayHello2(`Naruto`);

// CARA 2
const person2 = {
  name: "Dani",
};

// Anonymous Function
// person2.sayHello = function (name) {
//     alert(`Hai ${name}`);
// }

// Arrow Function
person2.sayHello = (name) => alert(`Hai ${name}`);

person2.sayHello(`Sasuke`);
