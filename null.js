/*
            #NULL
                -Null merupakan representasi data kosong
                -Null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null(Kosong)
                -Sedangkan Undefined adalah variable belum ditambahkan value apapun

            UNDEFINED ITU ADALAH DATA YANG BELUM KITA DEFINISIKAN ISINYA, SEDANGKAN NULL SUDAH DIDEFINISIKAN ISINYA TAPI KOSONG ISINYA
        */

let firsname = null;
if (firsname === undefined) {
  console.info("Hello Undefined");
  alert("Undefined");
} else if (firsname === null) {
  console.info("Hello Null");
  alert("Null");
} else {
  console.info(`Hello, ${firsname}`);
  alert(firsname);
}
