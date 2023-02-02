let resurce = [
    {
        id: 01,
        name: "Antonella",
        surname: "Brenghella",
        mail: "123@hotmail.it",
        cf: "Brnnt80dks90sjQ",
        address: "via dei matti"
    },
    {
        id: 02,
        name: "Antonella",
        surname: "Brenghella",
        mail: "123@hotmail.it",
        cf: "Brnnt80dks90sjQ",
        address: "via dei matti"
    },
    {
        id: 03,
        name: "Antonella",
        surname: "Brenghella",
        mail: "123@hotmail.it",
        cf: "Brnnt80dks90sjQ",
        address: "via dei matti"
    },

];

let tbody = document.getElementById("cool");


function creaNodo(tipo, parente, contenuto) {

    let nodo = document.createElement(tipo);

    if (parente != null) {
        parente.appendChild(nodo);
    }

    if (contenuto != null) {
        contenuto = {}
        
    }


    return nodo;
};



/*ora cosa devo fare?
devo creare per ogni i un tr
 */

resurce.forEach(person => {

    estensioneFileHTML(person.id, person.nome, person.cognome, person.indirizzoMail, person.indirizzoVia);

});

function estensioneFileHTML(id, nome, cognome, indirizzoMail, indirizzoVia) {
    let tr = creaNodo("tr", tbody, null);
    let td = creaNodo("td", tr, {
        id, nome, cognome, indirizzoMail, indirizzoVia
    });
    tr.appendChild(td);

}
