let prendiDivPadre = document.getElementById("divPadre");
let cards = [
    {
        immage: "border-collie_63_0_orig.jpg",
        titolo: "border Collie",
        Descrizione:"Cane intellignete e giocherellone"
    },
    {
        immagine: "istockphoto-1137958223-612x612.jpg",
        titolo: " pincher",
        Descrizione:"Cane energico e territoriale"
    },
    {
        immagine:"img/vendita-cuccioli-di-pinscher_613513_8_9.jpg",
        titolo: "pastore tesesco",
        Descrizione:"Cane intellignete e affettuoso"
    }
];


function creaHtml(){


let img = document.createElement("img");
let div = document.createElement("div");

let h5= document.createElement("h5");
let p = document.createElement("p");




prendiDivPadre.appendChild(img);
prendiDivPadre.appendChild(div);

div.appendChild(h5);
div.appendChild(p)


return prendiDivPadre;
}

creaHtml();

cards.forEach(card=>{
    let cardHtml = creaHtml();
    card.immage = cardHtml.

})