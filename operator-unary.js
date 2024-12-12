// Operator yang biasanya cukup membutuhkan 1 data.
/* 
            1. Yang bisa didepan
               + (Menandakan nilai positif)
               - (Menandakan nilai negatif)
            2. Yang bisa dibelakang
                ++ (Increment, manaikkan 1 angka)
                -- (Decrement, manurunkan 1 angka)
        */

document.writeln("<h1>Operator Unary</h1>");

let result = +1; //+1 = positif 1 atau = result = 1;
document.writeln("<p>" + result + "</p>");

result--; //result = result - 1, result -= 1; 0
document.writeln("<p>" + result + "</p>");

result++; //result = result + 1, result += 1; 1
document.writeln("<p>" + result + "</p>");

result = -result; // result = -result; -1
document.writeln("<p>" + result + "</p>");

// Digunakan untuk 1 data bukan kombinasi 2 data atau operasi 2 data
