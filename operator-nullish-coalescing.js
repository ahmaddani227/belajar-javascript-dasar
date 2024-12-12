/*
            #NULLISh COALESCING OPERATOR
                -Nullis value adalah null dan undefined
                -Nullish coalescing operator (??) adalah operator mirip dengan ternari operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value defaultnya diambil

            
                
        */

let parameter;

// IF STATEMENT
let data = parameter;
if (data === undefined || data === null) {
  data = "Nilai Default";
}
document.writeln(`<p>${data}</p>`);

// NULLISH COALESCING OPERATOR
data = parameter ?? "Nilai Default";
document.writeln(`<p>${data}</p>`);
