document.addEventListener("DOMContentLoaded", function(){
    //Declarar variable de un arreglo de objetos
    //Imagenes 
    let imagenes = [
        { 
            img:"imagenes/elefante.jpg",
            name:"elefante",
        },
        {
            img:"imagenes/gato.jpg",
            name:"gato",
        },
        {
            img:"imagenes/jirafa.jpg",
            name:"jirafa",
        },
        {
            img:"imagenes/leon.jpg",
            name:"leon",
        },
        {
            img:"imagenes/loro.jpg",
            name:"loro",
        },
        {
            img:"imagenes/perro.jpg",
            name:"perro",
        },
        {
            img:"imagenes/elefante.jpg",
            name:"elefante",
        },
        {
            img:"imagenes/gato.jpg",
            name:"gato",
        },
        {
            img:"imagenes/jirafa.jpg",
            name:"jirafa",
        },
        {
            img:"imagenes/leon.jpg",
            name:"leon",
        },
        {
            img:"imagenes/loro.jpg",
            name:"loro",
        },
        {
            img:"imagenes/perro.jpg",
            name:"perro",
       }
    ]

//Seleccionar tablero de Html
let tablero = document.querySelector(".tablero");
//Arreglo para guardar el nombre de las imagenes 
let imgElegida = [];
//Arreglo para guardar el Id de las imagenes
let imgElegidaId = [];
let aciertos = document.querySelector(".conteo");
let conteo = [];

//Funcion para que las imagenes cambien de posicion en el tablero 
imagenes.sort( ()=>0.5 - Math.random());

//Funcion para colocar las imagenes en el Html
function crearTablero(){
    for(let i = 0; i < imagenes.length; i++){
        var img = document.createElement("img");
        img.setAttribute("data-id",i);
        img.setAttribute("src","imagenes/pregunta.png");
        img.setAttribute("width","170px");
        img.setAttribute('class', 'a');
        tablero.appendChild(img);
        img.addEventListener("click",descubrirImagen);
    }
}

//Funcion para descubrir una imagen 
function descubrirImagen(){
    let imgClick = this.getAttribute("data-id");
    imgElegida.push(imagenes[imgClick].name);
    imgElegidaId.push(imgClick);
    this.setAttribute("src",imagenes[imgClick].img);
    if(imgElegida.length === 2){
        setTimeout(compararImagenes, 300);
    }
}

//Funcion para comparar las imagenes 
function compararImagenes(){
    let todasLasImg = document.querySelectorAll("img");
    let opcion1 = imgElegidaId[0];
    let opcion2 = imgElegidaId[1];
    if(imgElegida[0] === imgElegida[1] ){
        alert("Acertaste");
        todasLasImg[opcion1].setAttribute('src','./imagenes/acierto.jpg');
        todasLasImg[opcion2].setAttribute('src','./imagenes/acierto.jpg');
        conteo.push(imgElegida);
    }else{
        alert("Sigue intentando");
        todasLasImg[opcion1].setAttribute('src','./imagenes/pregunta.png');
        todasLasImg[opcion2].setAttribute('src','./imagenes/pregunta.png');

    }
//Volver a llenar el arreglo
    imgElegida = [];
    imgElegidaId = [];
    aciertos.textContent = conteo.length;
    if(conteo.length ===6){
        aciertos.textContent = "Felicitaciones ganaste";
    }
}
//ejecutar funcion crear tablero
crearTablero();

})

