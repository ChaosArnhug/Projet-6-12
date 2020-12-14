"use strict";
//Meunier Arnaud

//variables
let profils = [
    {age: "54", comm: "mort", diplome: "RIP", email: "add2@gmail.com", genre: "homme", jobs: "", nom: "Maxime", prenom: "Liégeois", tel: "047464587"},
    {age: "20", comm: "XD", diplome: "", email: "add1@gmail.com", genre: "homme", jobs: "professeur", nom: "Liégeois", prenom: "Romain", tel: "0465856987"},
    {age: "18", comm: "aime manga et jeux vidéo", diplome: "technologie de l'informatique",email: "arnaudmeunier03@gmail.com", genre: "homme", jobs: "caisier", nom: "meunier", prenom: "arnaud", tel: "0473583750"},
    {age: "10", comm: "https://twitter.com/BSiberdt", diplome: "diplôme approximatif en médecine approximative",email: "benjaminsiberdtsimba@yahoo.be", genre: "autre", jobs: " influenceur et pâtissier les jeudis", nom: "siberdt", prenom: "benjamin", tel: "0469420420"},
    ];
let filtre ={};
let statusNav =0;
let statusFiltre=0;
//fonctions de traitement
function getElem (id) {
    return document.getElementById(id)
}

function envoitFromulaire(formulaire){
    /*Récupère les valeurs du formulaires, les enregistre dans un variables et réinitialise le formulaire
    * @param {form} formulaire -le formualaire fait par l'utilisateur
    * @return false
    */
    let newProfil ={
            nom : formulaire.nom.value,
            prenom : formulaire.prenom.value,
            genre : formulaire.genre.value,
            age : formulaire.age.value,
            tel : formulaire.numTel.value,
            email :formulaire.email.value,
            diplome : formulaire.diplome.value,
            jobs : formulaire.jobs.value,
            comm : formulaire.infoSup.value
    };
    profils.unshift(newProfil);
    confirm();
    getElem("formulairProfil").reset();
    return false;
}
function envoitFiltre (formulaire){
    filtre.nom = formulaire.nom.value;
    filtre.prenom =formulaire.prenom.value;
    filtre.genre =formulaire.genre.value;
    filtre.age = formulaire.age.value;
    filtre.diplome = formulaire.diplome.value;
    filtre.jobs = formulaire.jobs.value;
    confirm();
    getElem("filtreF").reset();
    afffichageProfils();
    return false;
}
function propAFiltrer (obj, nomProp){
    if (! filtre[nomProp]){
        return true;
    }
    return obj[nomProp] === filtre[nomProp];
}
function trieur (x){
    return propAFiltrer(x,"nom") && propAFiltrer(x, "prenom")&& propAFiltrer(x,"genre")&& propAFiltrer(x,"age")&& propAFiltrer(x,"diplome")&&propAFiltrer(x,"jobs");
}


//fonction de mise en page
function rotationImage (){
    getElem("imgNav").style.transform +='rotate(180deg)';
}
function modifNav () {
    if (statusNav ===0){
        getElem("navigation").style.display= "none";
        getElem("corpsPage").style.width= "100%";
        statusNav = 1;
        return;
    }
    getElem("navigation").style.display= "block";
    getElem("corpsPage").style.width= "81%";
    statusNav =0;
}

function confirm(){
    getElem("msgConfirm").innerHTML ="<p class='droiteF'>L'envoit a bien été effectué !</p>"
}
function afficherFiltre(){
    if (statusFiltre===0){
        getElem("filtreF").style.display= "none";
        statusFiltre = 1;

    }else {
        getElem("filtreF").style.display = "block";
        statusFiltre = 0;
    }
}
function afffichageProfils (){
    let profilsTrier= profils.filter(trieur);
    let affichProfils="";
    if ( ! profilsTrier.length){
        affichProfils +="<section class='profilsNon'><p>Aucun résultat trouvé !</p><br><br><br><br><br><br></section>"
    }else{
        for (let i of profilsTrier){
            affichProfils += `<section class="profils"><p>Nom : ${i.nom}<br>Prénom : ${i.prenom}<br>Genre : ${i.genre}<br>Age : ${i.age}<br></p>
            Téléphone : ${i.tel}<br>Email : ${i.email}<br>Diplôme(s) : ${i.diplome}<br>Job(s) : ${i.jobs}<br>
            Commentaire : ${i.comm}<br></section>`
        }
    }
    getElem("affichageProfils").innerHTML = affichProfils;
}
//Dynamique
document.addEventListener('DOMContentLoaded', rotationImage);
document.addEventListener('DOMContentLoaded', afffichageProfils);