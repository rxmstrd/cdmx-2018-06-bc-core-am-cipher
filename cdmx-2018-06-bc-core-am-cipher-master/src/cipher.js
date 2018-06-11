const cifrarMensaje =()=> {
    //Guarda el mensaje para cifrar
    let cifrar = document.querySelector("#cifrar").value;
    console.log("mensaje inicial: ", cifrar)
    console.log("mensaje longitud: ", cifrar.length)

    //Guarda el Valor del número seleccionado
    let key = document.querySelector("#key").value;
    console.log("valor de key: ", key )

    //Formula de cifrado
    let resultado= [];
    for (let i=0; i<cifrar.length; i++) { 
        let cifrado = cifrar[i].charCodeAt() - 65 + key % 26 + 65;
        console.log('formula: ', cifrado);
        resultado += String.fromCharCode(cifrado);
        console.log("resultado en string de la formula:", resultado);
        const resultadoFinal= document.getElementById("resultadoF");
        resultadoFinal.value = resultado;    
    }
} 

const descifrarMensaje =()=> {
    //Guarda el mensaje para descifrar
    let descifrar = document.querySelector("#descifrar").value;
    console.log("mensaje inicial: ", descifrar)
    console.log("mensaje longitud: ", descifrar.length)

    //Guarda el Valor del número seleccionado
    let key = document.querySelector("#key").value;
    console.log("valor de key: ", key )

    //Formula de descifrado
    let resultado = [];
    for (let i=0; i<descifrar.length; i++) { 
        let descifrado = descifrar[i].charCodeAt() - 65 - key % 26 + 65;
        console.log('formula: ', descifrado);
        resultado += String.fromCharCode(descifrado);
        console.log("resultado en string de la formula:", resultado);
        const resultadoFinal= document.getElementById("resultadoF");
        resultadoFinal.value = resultado;    
    }
   
} 

const reset = () => {
    document.querySelector("#cifrar").value="";
    document.querySelector("#descifrar").value="";
    document.querySelector("#key").value="";
    document.querySelector("#resultadoF").value="";

}
    
