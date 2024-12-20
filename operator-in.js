/*
            #IN OPERATOR
                -In operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam objeck ada atau tidak
                -Jika property tersebut ada di objeck, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
                -Tidak hanya di objeck, In juga bisa digunakan untuk mengecek index di Array

            #PERINGATAN 
                -In operator hanya akan mengecek sebuah property atau index ada atau tidak
                -Jadi walaupun nilai property atau indexnya undefined atau null, maka tetap dianggap ada
        */

const person = {
  firsname: "Ahmad",
  lastname: "Dani",
  Undefind: undefined,
};

if ("firsname" in person) {
  alert(`Hello, ${person.firsname}`);
} else {
  alert(`Hello`);
}

const result = "lastname" in person; //True
document.writeln(`<p>${result}</p>`);

const result2 = "Undefind" in person; //true
document.writeln(`<p>${result2}</p>`);
if ("Undefind" in person) {
  alert(`Hello, ${person.Undefind}`);
} else {
  alert(`Hello`);
}

const names = [null, "Ahmad", "Dani"];
const nameResult = 0 in names; // true
document.writeln(`<p>${nameResult}</p>`);
