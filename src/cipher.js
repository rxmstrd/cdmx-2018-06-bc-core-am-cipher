<<<<<<< HEAD
window.cipher = {
  //se declara la función encode que contiene los parámetros del offset que es la llave y el string que el usuario ingrasará
  encode : (offset, string) => {
  //Se declaran dos variables vacias para ser usadas en la función
    let resultado= [];
    let cifrado = [];
    
//se toma el indice i para señalar dar las indicaciones de 
    for ( let i = 0; i < string.length; i++ ) {
//si el string es mayor o igual a 65 y menor o igual a 90 se aplica el siguiente paso
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
//Si se cumplio la condición anterios entonces de aplica la formula para las mayusculas del codigo ascci
        cifrado = (string[i].charCodeAt() - 65 + offset) % 26 + 65;
      }
//Si el estring es mayor o igual a 97 y menor o igual a 122 se aplica el siguiente paso
      else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
      //Si se cumple la condicion anterior se aplica la formula para minusculas del codigo ascci
        cifrado = (string[i].charCodeAt() - 97 + offset) % 26 + 97;
      }
//Si el strin es igual o mayor a 48 y menor o igual al 57 se aplica la formula para numeros naturales
      else if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57) {
        cifrado = (string[i].charCodeAt() - 48 + offset) % 10 + 48;
      }
//si el string no es mayuscula, minuscula o números la deja como está
      else {
        cifrado = (string[i].charCodeAt());
      }
      

      //else if (string[i].charCodeAt() >= 32 && cipher1[i].charCodeAt() <= 64) {
      //  symbols = (string[i].charCodeAt()- 32 + offset)%33 + 32;
      //}
        
        
      //resultado += String.fromCharCode(cifrado)+ String.fromCharCode(symbols);
 //El resultado es igual a la suma de los resultados convertidos en string
      resultado += String.fromCharCode(cifrado);

    } return resultado;

  },

  decode: (offset, string) => {
    let resultado = [];
    let cifrado = [];
    let symbols = [];

    for (let i = 0; i < string.length; i++) {

      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        cifrado = (string[i].charCodeAt() - 90 - offset) % 26 + 90;
      }
      else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
        cifrado = (string[i].charCodeAt() - 122 - offset) % 26 + 122;
      }
      else if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57) {
        cifrado = (string[i].charCodeAt() - 57 - offset) % 10 + 57;
      }
      else {
        cifrado = (string[i].charCodeAt());
      }
      //else if (string[i].charCodeAt() >= 32 && cipher1[i].charCodeAt() <= 64) {
      //  symbols = (string[i].charCodeAt()- 64 + offset)%33 + 64;
      //}
        
      //resultado += String.fromCharCode(cifrado)+ String.fromCharCode(symbols);
      resultado += String.fromCharCode(cifrado);
    }return resultado;

  },

  createCipherWithOffset: () => { console.log('createCipherWithOffset'); }

};

// se declara una constante reset que llama al valor de las areas de texto y del input offset para dejarlos con valor vacio
const reset = () => {
  document.querySelector("#cifrar").value="";
  document.querySelector("#offset").value="";
  document.querySelector("#resultadoF").value="";
};

//comentario


=======
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
>>>>>>> origin/master
