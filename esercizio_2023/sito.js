let prendiDivPadre = document.getElementById("divPadre");
let cards = [
    {
        image: "Img/border-collie_63_0_orig.jpg",
        titolo: "border Collie",
        descrizione: "Cane intellignete e giocherellone"
    },
    {
        image: "Img/istockphoto-1137958223-612x612.jpg",
        titolo: " pincher",
        descrizione: "Cane energico e territoriale"
    },
    {
        image: "Img/vendita-cuccioli-di-pinscher_613513_8_9.jpg",
        titolo: "pastore tesesco",
        descrizione: "Cane intellignete e affettuoso"
    }
];





function generaHTML(imgContent, titolo, paragrafo) {
    let img = document.createElement("img");
    let div = document.createElement("div");

    let h5 = document.createElement("h5");
    let p = document.createElement("p");

    prendiDivPadre.appendChild(img);
    prendiDivPadre.appendChild(div);

    div.appendChild(h5);
    div.appendChild(p);
    img.classList.add("card-img-top");
    div.classList.add("card-body");
    h5.classList.add("card-title");
    p.classList.add("card-text");

    img.src = imgContent;
    h5.innerHTML = titolo;
    p.innerHTML = paragrafo;

}

function generaHTMLExtension(imgContent, titolo, paragrafo) {
    const img = createNode("img", prendiDivPadre, "card-img-top", null);
    img.src = imgContent;

    const div = createNode("div", prendiDivPadre, "card-body", null);

    const h5 = createNode("h5", div, "card-title", titolo);
    const p = createNode("p", div, "card-text", paragrafo);
}

function createNode(type, parent, classList, content) {
    const node = document.createElement(type);

    if (parent != null)
        parent.appendChild(node);

    node.classList.add(classList);

    if (content != null)
        node.innerHTML = content;

    return node;
}




for (let i = 0; i < cards.length; i++) {
    generaHTMLExtension(cards[i].image, cards[i].titolo, cards[i].descrizione);

}