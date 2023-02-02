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


function creaNodo(tipo, parente, content) {

    let nodo = document.createElement(tipo);

    if (parente = null) {
        parente.appendChild(nodo);
    }
    if (content != null) {
        nodo.innerHTML = {content
        
        };
    }
};



/*ora cosa devo fare?
devo creare per ogni i un tr
 */

resurce.forEach(person=>{
    let tr = creaNodo("tr",tbody,)
   
})