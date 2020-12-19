"use strict";
//Meunier Arnaud

//variables
let profils = [
    {age: 42, comm: "joue dans l'illégalité", diplome:"arts et lettres de l'académie des arts ", email: "S.chardon@gmail.com", genre: "femme", jobs:"essentiellement du black", nom: "chardon", prenom: "sandrine", tel: "3141592653"},
    {age: 47, comm: "wui", diplome: "ingénierie agronome", email:"add1@gmail.com", genre: "homme", jobs:"voir diplôme", nom: "pouquet", prenom: "jacques", tel: "0494461834"},
    {age: 18, comm: "aime manga et jeux vidéo", diplome:"technologie de l'informatique",email: "arnaudmeunier03@gmail.com", genre: "homme", jobs:"caisier", nom: "meunier", prenom: "arnaud", tel: "0473583750"},
    {age: 10, comm: "https://twitter.com/BSiberdt", diplome:"diplôme approximatif en médecine approximative",email: "benjaminsiberdtsimba@yahoo.be", genre: "autre", jobs:"influenceur et pâtissier les jeudis", nom: "siberdt", prenom: "benjamin", tel: "0469420420"},
    ];
let filtre ={};
let statusNav =0;


//fonctions de traitement
function getElem (id) {
    return document.getElementById(id)
}

function envoitFromulaire(formulaire){
    /*Récupère les valeurs du formulaires, les enregistre dans un variables et réinitialise le formulaire
    * @param {form} formulaire - le formualaire fait par l'utilisateur
    * @return false
    */
    let newProfil ={
            nom : formulaire.nom.value.toLowerCase(),
            prenom : formulaire.prenom.value.toLowerCase(),
            genre : formulaire.genre.value,
            age : formulaire.age.value,
            tel : formulaire.numTel.value,
            email :formulaire.email.value,
            diplome : formulaire.diplome.value.toLowerCase(),
            jobs : formulaire.jobs.value.toLowerCase(),
            comm : formulaire.infoSup.value.toLowerCase(),
    };
    profils.unshift(newProfil);
    afffichageProfils();
    confirm();
    getElem("formulairProfil").reset();
    return false;
}
function envoitFiltre (formulaire){
    /*Récupère les valeurs du formulaire, les mets en minuscule, les enregistre dans une variable, confirme l'envoi du formulaire et le réinitialise
    * @param {form} formulaire - le formulaire fait par l'utilisateur
    * @return false
    */
    filtre.nom = formulaire.nom.value.toLowerCase();
    filtre.prenom =formulaire.prenom.value.toLowerCase();
    filtre.genre =formulaire.genre.value;
    filtre.age = formulaire.age.value;
    filtre.diplome = formulaire.diplome.value.toLowerCase();
    filtre.jobs = formulaire.jobs.value.toLowerCase();
    confirm();
    getElem("filtreF").reset();
    afffichageProfils();
    return false;
}
function propAFiltrer (obj, nomProp){
    /*Regarde si la valeur d'une propriété d'un object correspond à celle voulue par l'utilisateur si le champs du filtre a été rempli
    * @param {object} - l'object que l'on veut comparer au filtre
    * @param {string} - nom de la propriété
    * @return {boolean}
    * */
    if (! filtre[nomProp]){
        return true;
    }
    if (nomProp === "age"){
        return filtre[nomProp] <= obj[nomProp];
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
    /*Change l'affichage de la navigation de la page en fonction de l'état de celle-ci (affichée ou non). La fonction se base sur une variable global (statusNav) pour connaitre l'état*/
    if (statusNav ===0){
        getElem("navigation").style.display= "none";
        getElem("corpsPage").style.width= "100%";
        statusNav = 1;

    }else{
        getElem("navigation").style.display= "block";
        getElem("corpsPage").style.width= "81%";
        statusNav =0;
    }
}

function confirm(){
    getElem("msgConfirm").innerHTML ="<p class='droiteF'>L'envoit a bien été effectué !</p>"
}

function afffichageProfils (){
    /*Permet d'afficher les profils par ordre alphabétique au niveau du nom et selon le filtre choisi par l'utilisateur*/
    profils.sort(function (x,y){if (x.nom > y.nom) return 1;if (x.nom < y.nom) return -1; return 0});
    let profilsTrier= profils.filter(trieur);
    let affichProfils="";
    if ( ! profilsTrier.length){
        affichProfils +="<section class='profilsNon'><p>Aucun résultat trouvé !</p></section>"
    }else{
        for (let i of profilsTrier){
            affichProfils += `<section class="profils"><p>Nom : ${i.nom}<br>Prénom : ${i.prenom}<br>Genre : ${i.genre}<br>Age : ${i.age}<br></p>
            Téléphone : ${i.tel}<br>Email : ${i.email}<br>Diplôme(s) : ${i.diplome}<br>Job(s) : ${i.jobs}<br>
            Commentaire : ${i.comm}<br></section>`
        }
    }
    getElem("affichageProfils").innerHTML = affichProfils;
}
function affichageRechProfil () {
    getElem("creaProfil").style.display ="none";
    getElem("rechProfil").style.display ="block";
    getElem("gestionFiltre").style.display="block";
}
function affichageNouvProfil (){
    getElem("creaProfil").style.display ="block";
    getElem("rechProfil").style.display ="none";
    getElem("gestionFiltre").style.display="none";
}
//Dynamique
document.addEventListener('DOMContentLoaded', rotationImage);
document.addEventListener('DOMContentLoaded', afffichageProfils);