class Tabella {
    constructor(nomiRiga, listaClienti) {
        this.root = document.getElementById("thead")
        this.creaRigaPrincipale(nomiRiga)
        this.body = document.getElementById("t-body")
        this.listaClienti=listaClienti;
    }



    creaRigaPrincipale(nomiRiga) {
        let tr = this.creaNodo("tr", this.root, null, null)
        nomiRiga.forEach(nome => {
            let th = this.creaNodo("th", tr, null, nome)

        });

    }

    creaNodo(tipo, genitore, classe, contenuto) {
        let nodo = document.createElement(tipo);
        if (genitore != null) {
            genitore.appendChild(nodo);
        }
        if (classe != null) {
            nodo.cassList.add(classe);
        }
        if (contenuto != null) {
            nodo.innerHTML = contenuto;
        }
        return nodo;
    }

    listaNomi(listaClientil) {
        let tr = this.creaNodo("tr", this.body, null, null);
        const self = this;
        this.listaClienti.forEach(cliente => {
            self.creaNodo("td", tr, null, cliente.id)
            self.creaNodo("td", tr, null, cliente.nome)
            self.creaNodo("td", tr, null, cliente.cognome)
            self.creaNodo("td", tr, null, cliente.mail)

        })

    }






}

let tabellamia = new Tabella(["id", "nome", "cognome", "mail"],[{id:"01",nome:"antonietta",cognome:"brenga",mail:"antogrg90@hotmail.it"}])



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