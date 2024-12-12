/*
            #DESTRUCTURING
                -Desteucturing adalah fitur yang bisa digunakan untuk membongkar(Mengekstrak) value-value di Array atau Objeck ke dalam Variable-variable
                -Fitur ini sangat mempermudah ketika ingin mengambil data dari Array atau Objeck tanpa harus melakukan pengambilan data satu persatu.

            #Destructuring Function Parameter
                -Destructuring tidak hanya bisa dilakukan di variable, Tapi juga bisa dilakukan di Function Parameter
                -Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau objeck dalam function

            #DEFAULT VALUE
                -Yang paling menarik di Destructuring adalah, kita bisa menambahkab Default Value
                -Jadi misal kita ingin melakukan Destructuring terhadap Array, ternyata tidak ada datanya, maka kita bisa menambhakan Default Value
                -Begitu juga pada Objeck, jika ternyata property nya tidak ada, maka kita bisa menambhakan Default Value

            #MENGGUNAKAN NAMA VARIABLE LAIN
                -Saat melakukan Destructuring di Array, kita bisa dengan mudah membuat nama Variable sesuka kita 
                -Namun pada saat melakukan Destructuring, kita harus membuat nama Variable sama dengan Nama Property nya
                -Kita juga bisa menggunakna nama Varible lain saat melakukan Destructuring Objeck jika kita mau
        */

/*---------------------------------------------------------------*/
console.info("# Destructuring di Array");

{
  const names = ["Ahmad", "Dani", "Uzumaki", "Naruto"];

  // MENGAMBIL DATA ARRAY SATU PERSATU
  const firsname = names[0];
  const lastname = names[1];

  // console.info(firsname);
  // console.info(lastname);

  // DESTRUCTURING ARRAY
  // Didalam [] adalah nama Variablenya
  const [firsName, lastName, ...others] = names;

  console.info(firsName);
  console.info(lastName);
  console.info(others); //Bentuk Array
}

/*---------------------------------------------------------------*/
console.info("# Destructuring di Objeck");

{
  // MENGAMBIL DATA DI OBJECK
  // person adalah Nested Objeck(Objeck dalam Object)
  const person = {
    namaDepan: "Ahmad",
    namaBelakang: "Dani",
    addres: {
      street: "Jalan Rusak",
      city: "Bangkalan",
      country: "Indonesia",
    },
    hoby: "Ngoding",
    ig: "instagram.com/__ahmaddani_",
  };

  // CARA BIASA
  // const namaDep = person.namaDepan;
  // const namaBel = person.namaBel;

  // DESTRUCTURING OBJECK
  /* Didalam {} adalah variable juga.Tapi, nama variable nya harus sama dengan nama Propertynya. Jika tidak sama maka nilai nya atau value nya adalah undefined. Dan juga juga tidak HArus Urut, ...lainnya adalah spread syntax di rest-parameter*/
  // Destructuring Objeck Nested. addres: {} didalam nya adalah nama property dari Property addres dan tidak harus urut.
  const {
    namaDepan,
    namaBelakang,
    addres: { country, street, city },
    ...lainnya
  } = person;
  console.info(namaDepan);
  console.info(namaBelakang);
  // console.info(addres);
  /*Bentuk Objeck. Yang isinya country, city, street. Jika addres nya di Destructuring maka addres nya tidak dapat diakses atau error.*/
  console.info(country);
  console.info(city);
  console.info(street);
  console.info(lainnya); //Bentuk Objeck. tapi sisa Attribute nya atau Property nya yaitu hoby dan ig
}

/*---------------------------------------------------------------*/
console.info("# Destructuring di Function Parameter");

{
  // Destructuring Function Parameter Objeck(1)
  function displayParameter({ firsname, lastname }) {
    console.info(firsname);
    console.info(lastname);
  }

  const person2 = {
    firsname: "Ahmad",
    lastname: "Dani",
  };

  displayParameter(person2);

  // Destructuring Function Parameter Array(2)
  function sum([first, second]) {
    return first + second;
  }

  console.info(sum([20, 2]));
}

/*---------------------------------------------------------------*/
console.info("# Default Value Destructrucing Array");

{
  const name = ["Naufal", "Muhammad"];
  const [firstname, middlename, lastname = "Zaky"] = name;

  console.info(firstname);
  console.info(middlename);
  console.info(lastname);
}

/*---------------------------------------------------------------*/
console.info("# Default Value Destructrucing Objeck");

{
  const person = {
    firstname: "Naufal",
    lastname: "Zaky",
  };

  const { firstname, lastname, middlename = "Muhammad" } = person;
  console.info(firstname);
  console.info(middlename);
  console.info(lastname);
}

/*---------------------------------------------------------------*/
console.info("# Menggunakan Nama Variable Lain saat Destructuring Objeck");

{
  const person = {
    firstname: "Naufal",
    lastname: "Zaky",
  };

  const {
    firstname: namaDepan,
    lastname: namaBelakang,
    middlename: namaTengah = "Muhammad",
  } = person;
  // Artinya, kita melakukan Destructuring pada Property firstname kemudian kita ingin simpan dlm variable namaDepan dst.

  // console.info(firstname); //Error karena nama Variable sudah diganti menjadi namaDepan
  // console.info(middlename); //Error karena nama Variable sudah diganti menjadi namaTengah
  // console.info(lastname); //Error karena nama Variable sudah diganti menjadi namaBelakang
  console.info(namaDepan);
  console.info(namaTengah);
  console.info(namaBelakang);
}
