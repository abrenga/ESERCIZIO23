/*Create una rudimentale barra di ricerca implementando la funzione di autocompletamento. In pratica mentre scrivete nel campo il sistema deve suggerirvi sotto dei nomi presi da un array.

Cliccando sui nomi suggeriti il valore deve essere trasferito sulla barra di ricerca ed i nomi consigliati nascosti.

 */


class BarraDiRicerca {

    constructor(arrayDiSuggerimenti) {
        this.input = document.getElementById("input");
        this.dropD = document.getElementById("menu")
        this.arrayDiSuggerimenti = arrayDiSuggerimenti
        this.prendiInput(this.input);
        this.prendiSuggerimenti(this.input);
        this.riposizionaNelImput(this.input)



    }

    prendiInput(input) {
        input.addEventListener("input", () => {
            this.prendiSuggerimenti(input.value);
        })

    }

    prendiSuggerimenti(input) {
        for (let i = 0; i < this.arrayDiSuggerimenti.length; i++) {
            if (this.arrayDiSuggerimenti[i].includes(input)) {
                this.riposizionaNelImput(this.arrayDiSuggerimenti[i])
            }
        }
    }


    riposizionaNelImput(value) {
          console.log(value)

    }




}






let input = new BarraDiRicerca(["io", "ciao","Antonietta"])
