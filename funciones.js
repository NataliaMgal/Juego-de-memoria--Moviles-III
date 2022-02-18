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

//Tablero de Html
let tablero = document.querySelector(".tablero");

//Funcion para colocar las imagenes en el Html
function crearTablero(){
    for(let i = 0; i < imagenes.length; i++){
        var img = document.createElement("img");
        img.setAttribute("data-id",i);
        img.setAttribute("src","imagenes/pregunta.png");
        img.setAttribute("width","200px");
        tablero.appendChild(img);
    }
}

crearTablero();

})

