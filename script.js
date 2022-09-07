// selectores par poder manipular el html
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// método para escuchar eventos; le debemos pasar dos argumentos, el nombre del evento que debe escuchar y el código javaScript o función que debe mandar a llamar; en el onclick no debemos usar paréntisis porque la función add se encarga de ejecutarla; 
form.addEventListener('submit', sumarInputValues);

// Para no tener todas esas lineas de código en el archvio html, lo escribimos en éste
function sumarInputValues(event) {
    // esta propiedad evita que se recargue la página por defecto
    event.preventDefault();
    // tomando los valores de los inputs y sumándolos
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
}

// OTRA MANERA DE ESCUCHAR EL BUTTON
// btn.addEventListener('click', sumarInputValues);

// function sumarInputValues(event) {
    
//    const sumaInputs = input1.value + input2.value;
//    pResult.innerText = "Resultado: " + sumaInputs;
// }
// en el html a la etiqueta button le ponemos el atributo type="button"
