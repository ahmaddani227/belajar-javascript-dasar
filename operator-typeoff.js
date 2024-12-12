/*
            #TYPEOFF
                -Typeoff merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable
                -Karena JavaScript merupakan dynemic language, jadi kadang kita perlu mengecek tipe data sebuah variable menguanakan typeoff 
                -Hasil dati operator typeoff adalah stringv tipe data nya

            ----------------------------------------------
            Type          |      Hasil operator typeoff  |
            --------------|------------------------------|
            Undefined     |      "undefined"             |
            Null          |      "objeck"                |
            Boolean       |      "boolean"               |
            Number        |      "number"                |
            BigInt        |      "bigint"                | 
            String        |      "string"                | 
            Symbol        |      "symbol"                |
            Function      |      "function"              |  
            Lainnya       |      "objeck"                |
            ----------------------------------------------
        */

let data;

const typeData = typeof data;
document.writeln(`<p>${typeData}</p>`);

data = null;
const TypeNull = typeof data;
document.writeln(`<p>${TypeNull}</p>`);

data = true;
const TypeBoolean = typeof data;
document.writeln(`<p>${TypeBoolean}</p>`);

data = 100;
const TypeNumber = typeof data;
document.writeln(`<p>${TypeNumber}</p>`);

data = "Ahmad Dani";
const TypeString = typeof data;
document.writeln(`<p>${TypeString}</p>`);

// if (typeof data === "number") {
//     alert("Number");
// } else if( typeof data === "string" ) {
//     alert("String");
// }else if( typeof data === "boolean" ){
//     alert("Boolean");
// }else if( typeof data === "object" ){
//     alert("Objeck");
// }
