/*Utilizzando la programmazione ad oggetti create una classe 
per il mazzo e tutti i metodi necessari per mischiarlo, pescare e rimettere una carta in fondo. 
Limitatevi all’inizio ad avere 13 carte, quindi dall’asso al re.
Utilizzate dei console log per mandare a schermo la situazione del mazzo ad ogni operazione nonché le carte che pescate e rimettete nel mazzo.
https://lorenzoneri.com/come-mescolare-shuffle-un-array-in-javascript/ */


class MazzoDiCarte {
    constructor(mazzoDiCarte) {
        this.mazzoDiCarte = mazzoDiCarte;
        this.mischiaCarte(mazzoDiCarte);
        this.pescaCarte(mazzoDiCarte);
    }

    mischiaCarte(mazzoDiCarte) {
        for (let i = 0; i < mazzoDiCarte.length - 1; i++) {
            let cartaCasuale = Math.floor(Math.random() * (i)
            );

            let temporaryvalue = mazzoDiCarte[i]
            mazzoDiCarte[i] = mazzoDiCarte[cartaCasuale]
            mazzoDiCarte[cartaCasuale] = temporaryvalue

        };

        console.log(mazzoDiCarte);
    }

    pescaCarte(mazzoDiCarte) {
        let max = mazzoDiCarte.length - 1;
        let min = 0;

        let i = (Math.floor(Math.random() * (max - min + 1)) + min)

        console.log(mazzoDiCarte[i]);

        this.rimuoviDalMazzo(i)
    }

    rimuoviDalMazzo(index) {

        this.mazzoDiCarte.splice(index, 1)
        console.log(this.mazzoDiCarte)
    }



    rmettereCartaInfondo(mazzoDiCarte) {


    }
}



let mioMazzo = new MazzoDiCarte(["tre di cuori", "asso di denari", "due di picche", "asso Di cuori"]);

