"use strict";
//Meunier Arnaud

//variables
let profils = [];
let menuNav =0;
//fonctions de traitement
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

//fonction de mise en page

function rotationImage (){
    getElem("imgNav").style.transform +='rotate(180deg)';
}
function modifNav () {
    if (menuNav ===0){
        getElem("navigation").style.display= "none";
        getElem("corpsPage").style.width= "100%";
        menuNav = 1;
        return;
    }
    getElem("navigation").style.display= "block";
    getElem("corpsPage").style.width= "calc(100% - 18.75em)";
    menuNav =0;
}

//Dynamique
document.addEventListener('DOMContentLoaded', rotationImage);