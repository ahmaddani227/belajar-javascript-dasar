/*
            #ARROW FUNCTION DI OBJECK
                -Sebeumnya kita udah bahas tentang Arrow Function
                -Arrow Function juga bisa kita gunakan sebagai Objeck Method
                -Namun PERLU DIKETAHUI, Arrow Function tidak bisa digunakan untuk mengakses arguments objeck, function generator, kata kunci this dan kata kunci super(dibahas di materi JavaScript Objeck Oriented Programming)
                -Jadi pastikan gunakan Arrow Function hanya memang ketika kita tidak butuh fitur-fitur diatas
        */

const person = {
  name: "Ahmad",
  // sayHello: name => console.info(`Hello ${name}`)
  // sayHello: (name) => console.info(`Hello ${name}`)
  sayHello: (value) => {
    console.info(this); //Window
    console.info(`Hello ${value}`); // Hello Dani
    console.info(`Hello ${value} My Name Is ${this.name}`); //Hello Dani My Name Is
  },
};
person.sayHello("Dani");
