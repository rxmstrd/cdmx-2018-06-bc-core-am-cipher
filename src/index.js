let encodeB = document.getElementById("encode");
let offset = document.getElementById("offset");
let dedecodeB = document.getElementById("decode");
let resultadoFinal= document.getElementById("resultadoF");
let string = document.getElementById("cifrar");

let mensaje=() => {
    string=document.getElementById("cifrar").value;
    offset=parseInt(document.getElementById("offset").value);
    resultadoFinal.value=cipher.encode(offset, string);
};

let mensaje2=() => {
    string=document.getElementById("cifrar").value;
    offset=parseInt(document.getElementById("offset").value);
    resultadoFinal.value=cipher.decode(offset, string);

};



