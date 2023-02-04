class Tabella {
    constructor(nomiRiga, listaClienti) {
        this.root = document.getElementById("thead")
        this.creaRigaPrincipale(nomiRiga)
        this.body = document.getElementById("t-body")

        this.listaNomi(listaClienti)
    }



    creaRigaPrincipale(nomiRiga) {
        let tr = this.creaNodo("tr", this.root, null)
        nomiRiga.forEach(nome => {
            let th = this.creaNodo("th", tr, nome)

        });

    }

    creaNodo(tipo, genitore, contenuto) {
        let nodo = document.createElement(tipo);
        if (genitore != null) {
            genitore.appendChild(nodo);
        }

        if (contenuto != null) {
            nodo.innerHTML = contenuto;
        }
        return nodo;
    }

    listaNomi(listaClienti) {
        let tr = this.creaNodo("tr", this.body, null);

        listaClienti.forEach(cliente => {
            this.creaNodo("td", tr, cliente.id)
            this.creaNodo("td", tr, cliente.nome)
            this.creaNodo("td", tr, cliente.cognome)
            this.creaNodo("td", tr, cliente.mail)


        })

    }






}


let tabellamia = new Tabella(["id", "nome", "cognome", "mail"], [{ id: "01", nome: "Anto", cognome: "brg", mail: "skasa" }])



/*
const header = ["h1", "h2"];
const body = [
    {
        a: "k",
        b: "asd"
    }
];

const tabella = new Tabella(header, body);
tabella.print(header);

creaRigaTitolo(header, body);

Cosa ci aspettiamo da questa tabella?

ci aspettiamo che creata l'istanza generi colonne e righe con la lista completa dei nomi indicati nell'oggetto che gli passo come parametre.



*/