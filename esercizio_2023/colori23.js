/*Dividete la pagina html in due sezioni. Nella prima mettete una selezione di div colorati e la seconda lasciatela con un div vuoto. 
Passando sopra ai div colorati con il mouse dovete riempire il div vuoto con lo stesso colore.

Se ai div colorati applicate il background tramite classe potreste dover utilizzare getComputedStyle(elemento).
backgroundColor anzichè elemento.style.backgroundColor per prenderne il valore. */




var prendiDiv = document.querySelectorAll('.color')



prendiDiv.forEach(element => {

    element.addEventListener("click", () => {

        cambiaColore(element.style.backgroundColor)
    })
});



function cambiaColore(coloreBackground) {
    PrendiDivVuoto = document.getElementById("colore_selezionato");
    PrendiDivVuoto.style.backgroundColor = coloreBackground;
}







//style.backgroundColor = "#0f0"