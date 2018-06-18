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


