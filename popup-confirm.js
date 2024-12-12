/*
            #ALERT, PROMPT DAN CONFIRM
                -JavaScript memili fitur alert, promt dan confirm
                -Alert digunkan untuk memberi peringatan berupa popup text di browser 
                -Prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text
                -Sedangkan Confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan


        */

const masuk = confirm("Anda yakin mau masuk ?");
if (masuk) {
  const name = prompt("Siapa Nama Anda ?");
  alert(`Hello ${name}`);
} else {
  alert(`Bye bye`);
}
