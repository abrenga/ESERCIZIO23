/*Create una rudimentale barra di ricerca implementando la funzione di autocompletamento. In pratica mentre scrivete nel campo il sistema deve suggerirvi sotto dei nomi presi da un array.

Cliccando sui nomi suggeriti il valore deve essere trasferito sulla barra di ricerca ed i nomi consigliati nascosti.

 */


class BarraDiRicerca {

    constructor(arrayDiSuggerimenti) {
        this.input = document.getElementById("input");

        this.arrayDiSuggerimenti = arrayDiSuggerimenti
        this.prendiInput(this.input);
        this.prendiSuggerimento(this.input);
        this.riposizionaNelImput(this.input);


    }

    prendiInput(input) {

        input.addEventListener("keyup", () => {
            this.prendiSuggerimento(input.value)

        })


        for (let i = 0; i < this.arrayDiSuggerimenti; i++) {
            if (input != this.arrayDiSuggerimenti[i]) {

            }

        }

    }


    prendiSuggerimenti(input) {
        for (let i = 0; i < this.arrayDiSuggerimenti.length; i++) {
            if (input == this.arrayDiSuggerimenti[i]) {
                this.riposizionaNelImput(input)
            }
        }
    }

    riposizionaNelImput(input) {


    }
}

    



let input = new BarraDiRicerca(["io", "ciao", "wewe"])
