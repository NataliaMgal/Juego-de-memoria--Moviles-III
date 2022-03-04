document.addEventListener("DOMContentLoaded", function(){
    //Declarar variable de un arreglo de objetos
    //Imagenes 
    let imagenes = [
        { 
            img:"imagenes/elefante.png",
            name:"elefante",
        },
        {
            img:"imagenes/gato.png",
            name:"gato",
        },
        {
            img:"imagenes/oso.png",
            name:"oso",
        },
        {
            img:"imagenes/oveja.png",
            name:"oveja",
        },
        {
            img:"imagenes/tortuga.png",
            name:"tortuga",
        },
        {
            img:"imagenes/perro.png",
            name:"perro",
        },
        {
            img:"imagenes/elefante.png",
            name:"elefante",
        },
        {
            img:"imagenes/gato.png",
            name:"gato",
        },
        {
            img:"imagenes/oso.png",
            name:"oso",
        },
        {
            img:"imagenes/oveja.png",
            name:"oveja",
        },
        {
            img:"imagenes/tortuga.png",
            name:"tortuga",
        },
        {
            img:"imagenes/perro.png",
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
        img.setAttribute("width","175px");
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
    if(opcion1 === opcion2){
        todasLasImg[opcion1].setAttribute('src','./imagenes/pregunta.png');
        todasLasImg[opcion2].setAttribute('src','./imagenes/pregunta.png');
        alert("Debes darle click a otra imagen para comparar");
    }else if(imgElegida[0] === imgElegida[1] && opcion1!= opcion2){
        alert("Encontraste un par, genial")
        todasLasImg[opcion1].setAttribute('src','./imagenes/acierto.png');
        todasLasImg[opcion2].setAttribute('src','./imagenes/acierto.png');
        todasLasImg[opcion1].removeEventListener('click', descubrirImagen);
        todasLasImg[opcion2].removeEventListener('click', descubrirImagen);
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
       alert('Lo lograste, excelente');
       location.reload();
    }
}

//ejecutar funcion crear tablero
crearTablero();

})

