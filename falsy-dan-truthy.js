/*
            PENGGUNAAN DAN PENJELASAN MENGENAI PEMBUATAN KONDISI YANG BUKAN TIPE DATA BOOLEAN.

            #FALSY
                -Falsy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false 
                -Ini adalah salah satu fitur unik dari JavaScript, yang berguna, namun kadang juga serig membungungkan
                -Jadi di JavaScript, kondisi itu tidak hanya bisa boolean, tap diluar boolean pun bisa, namun kita harus tau beberapa data falsy, atau dianggap false

             ----------------------------------------------------------------
               Data diangggap Falsy | Keterangan                            | 
             -----------------------|---------------------------------------|
              false                 | Boolean false                         |
              0, -0                 | Number 0, dan -0 dianggap false       |
              "", '', ``            | Semua String kosong dianggap false    |
              null                  | null dianggap false                   |
              undefined             | undefined dianggap false              |
              NaN                   | Not a Number dianggap false           |
             ----------------------------------------------------------------

            #TRUTHY
                -Truthy adalah kebalikan dari falsy, dimana datanya dianggap bernilai true
                -Sederhana sekali sebenarnya untuk mengetahui sebuah data itu adalah truthy, yaitu data yang bukan bernilai false
        */

let data = ""; //FALSE

data = []; //TRUE
data = {}; //TRUE
data = null; //FALSE
data = undefined; //FALSE
data; //FALSE

if (data) {
  document.writeln("TRUE");
} else {
  document.writeln("FALSE");
}
