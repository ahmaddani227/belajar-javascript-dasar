/*
            #KATA KUNCI THIS
                -Kata kunci this adalah referensi ke objeck milik siapa
                -Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya
                -Dalam objeck method, this merupakan referensi ke objeck pemilik functionnya
                -Di global scope, this merupakan referensi ke Global Objeck (di Browser biasanya Window)
                -Dalam function, this merupakan referensi ke Global Objeck (di Browser biasanya Window)
                -Di function dengan strict mode(akan dibahas nanti), this adalah undefined
                -Dalam event, this merupakan referensi ke element yang menerima event (dibahas di materi Document Obejck Model)
        */

// this di GLobal Scope
console.info(this); // Window

// this di Function
function sample() {
  console.info(this); // Window

  // this di Nested Function
  function inner() {
    console.info(this); // Window
  }
  inner();
}
sample();

// this di Objeck Method
const person = {
  name: "Ahmad",
  sayHello: function (value) {
    // this = person
    console.info(this);
    console.info(`Hi ${value}, My name is ${this.name}`);
  },
};
person.sayHello("Naruto");
