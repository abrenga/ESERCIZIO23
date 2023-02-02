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

let tbody = document.getElementsByTagName("tbodyr");


function creaNodo(tipo, parente, child) {

    let nodo = document.createElement(tipo);

    if (parente != null) {
        parente.appendChild(nodo);
    }
    if (child != null) {
        nodo.appendChild(child)

    }
return nodo;
};

creaNoto("td",tbod)


/*ora cosa devo fare?
devo creare per ogni i un tr
 */

resurce.forEach(person => {
    let td = document.creaNodo("td", tbody, "tr");
     
    tr.immerHTML = estensioneFileHTML(person.id, person.name, person.surname, person.mail, person.cf, person.address)

return

});

function estensioneFileHTML(id, nome, cognome, indirizzoMail, indirizzoVia){
    
}
