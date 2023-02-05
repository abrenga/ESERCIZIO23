/*Create una rudimentale barra di ricerca implementando la funzione di autocompletamento. In pratica mentre scrivete nel campo il sistema deve suggerirvi sotto dei nomi presi da un array.

Cliccando sui nomi suggeriti il valore deve essere trasferito sulla barra di ricerca ed i nomi consigliati nascosti.

 */


class BarraDiRicerca {

    constructor(arrayDiSuggerimenti) {
        this.input = document.getElementById("input");;
        this.arrayDiSuggerimenti = arrayDiSuggerimenti
        this.prendiInput(this.input);



    }

    prendiInput(input) {

        input.addEventListener("input", (arrayDiSuggerimenti) => {
            for (let i = 0; i < arrayDiSuggerimenti; i++) {
                if (this.input.value == arrayDiSuggerimenti[i]) {
                    console.log(this.input.value)
                } else console.log("non trovato")

            }
        })



    }





}

let input = new BarraDiRicerca(["io", "ciao"])
