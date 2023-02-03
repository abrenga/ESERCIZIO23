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


function creaNodo(tipo, parente, content) {

    let nodo = document.createElement(tipo);

    if (parente != null) {
        parente.appendChild(nodo);
    }
    if (content != null) {
        nodo.innerHTML = content;

    }

    return nodo;
};







resurce.forEach(person => {
    let tr = creaNodo("tr", tbody, null);
    
    creaNodo("td",tr,person.id);
    creaNodo("td",tr,person.name);
    creaNodo("td",tr,person.surname);
    creaNodo("td",tr,person.mail);
    creaNodo("td",tr,person.cf);
    creaNodo("td",tr,person.address);
});



