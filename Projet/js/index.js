"use strict";
//Meunier Arnaud

//variables
let profils = [];

//fonctions
function getElem (id) {
    return document.getElementById(id)
}

function envoitFromulaire(formulaire){
    let newProfil ={
        infoPerso :{
            nom : formulaire.nom.value,
            prenom : formulaire.prenom.value,
            genre : formulaire.genre.value,
            age : formulaire.age.value,
            tel : formulaire.numTel.value,
            email :formulaire.email.value
        },
        profession : {
            diplome : formulaire.diplome.value,
            jobs : formulaire.jobs.value
        },
        comm : formulaire.infoSup.value
    };
    profils.unshift(newProfil);
    return false;
}