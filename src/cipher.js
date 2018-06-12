//Inicia la función Declarando la variable para cifrar el mensaje
const cifrarMensaje =()=> {
    //Declara la variable cifrar que obtiene el valor del id cifrar en html
    let cifrar = document.querySelector("#cifrar").value;
    console.log("mensaje inicial: ", cifrar)
    console.log("mensaje longitud: ", cifrar.length)

    //Declara la variable key que obtiene el valor del id key en html
    let key = document.querySelector("#key").value;
    console.log("valor de key: ", key )

    //Declara la variable  dejando los valores vacios para poderla ocupar más abajo para transformar mis valores
    //numericos a letra nuevamente
    let resultado= [];
    // Se declara que el indice inica en 0, que la longitud puede ser menor a i, y que por cada vuelta se suma 1
    for (let i=0; i<cifrar.length; i++) { 
    //Se declara la variable cifrado que transforma el valor de cifrar en numero tomando en cuenta el 
    //indice 0, una vez covertido cifrar en número se le aplica la formula, restar los 65 del código
    //ascci se suma el numero de la llave que viene de la variable key, se saca el modulo del 26 que corresponde
    //a las letras del alfabeto que conocemos y se suman de nuevo los 65 del código ascci.
        let cifrado = cifrar[i].charCodeAt() - 65 + key % 26 + 65;
        console.log('formula: ', cifrado);
    //Se llama a la variable resultado y se pone la suma para que agregue todos los valores numeros o letras
    //que corren en cada vuelta ( sin el signo de más solo me enviaba el ultimo valor aunque en consolge mostraba todas las vueltas)
    //se llama a cifrado que ahora esta convertido en numero y con string.from charcode lo regresa a letras
        resultado += String.fromCharCode(cifrado);
        console.log("resultado en string de la formula:", resultado);
    //Se declara la contante resultado final para imprimir el resultado en el id textarea html resultadoFinal.
        const resultadoFinal= document.getElementById("resultadoF");
    //Se declara resultado final con el valor de resultado que es el texto ya cifrado para poder apuntar al
    //al id resultadoFinal en html
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
//boton de reset, se declara la constante reset y con query selector se apunta a todos los id 
//que se imprimen en texarea y les asigna el valor vacio.
const reset = () => {
    document.querySelector("#cifrar").value="";
    document.querySelector("#descifrar").value="";
    document.querySelector("#key").value="";
    document.querySelector("#resultadoF").value="";

}
