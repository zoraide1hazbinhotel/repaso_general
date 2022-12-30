
let button = document.getElementById("button_buscar")

let recetas_nombres = [
    "Suspiro a la limeña",
    "Mini tarta de limon",
    "Cheesecake de maracuya"
]

let recetas_claves = [
    "suspiro_de_limeña.html",
    "mini trata de limon.html",
    "cheesecake_de_maracuya"
]

button.addEventListener("click", function(){
    let receta = document.getElementById("input_receta")

    for(let i = 0; i < recetas_nombres.length; i++){
        if(receta.value == recetas_nombres[i]){
            window.open(recetas_claves[i])
        }
    }

})