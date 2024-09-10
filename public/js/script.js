//Archivo que le da la funcionalidad al menu desplegable

//Muestra el menu desplegable al presionar el menu hamburguesa 
document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("side-menu").classList.add("open");
    document.getElementById("side-menu").classList.remove("close");
});


//Cierra el menu desplegable al presionar el boton X
document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("side-menu").classList.add("close");
    document.getElementById("side-menu").classList.remove("open");
});



