let candidatures = [];

function ajouterCandidature(nom, age, projet) {
  let id = candidatures.length; 
  candidatures.push({
    id: id,
    nom: nom,
    age: age,
    projet: projet,
    statut: "en attente"
  });
  return candidatures;
}
console.log(ajouterCandidature("mouad",22,"laboratoire"));
console.log(ajouterCandidature("hamza",19,"club"));

function afficherToutesLesCandidatures(){
  for (let i=0;i<candidatures.length;i++){
    return candidatures;
  }
}
console.log(afficherToutesLesCandidatures())

function validerCandidature(id) {
  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].id === id) { 
      candidatures[i].statut = "validée";
      return candidatures;
    }
  }
  console.log("The candidate hasn't added");
  return candidatures; 
}
console.log(validerCandidature(1))

function rejeterCandidature(id){
  for (let i =0; i<candidatures.length;i++){
    if (candidatures[i].id == id){
      candidatures[i].statut = "rejetée";
      return candidatures;
    }
  }
  console.log("The candidate hasn't added");
  return candidatures;
}
console.log(rejeterCandidature(0))

function rechercherCandidat(nom){
  for (let i=0; i<candidatures.length; i++){
    if (candidatures[i].nom == nom ){
      return candidatures[i];
    } else {
      console.log("the candidat dosn't exist");
      return candidatures;
    }
  }
}
console.log(rechercherCandidat("mouad"));

// the response 

[ { id: 0, nom: 'mouad', age: 22, projet: 'laboratoire', statut: 'en attente' } ]
[ { id: 0, nom: 'mouad', age: 22, projet: 'laboratoire', statut: 'en attente' }, { id: 1, nom: 'hamza', age: 19, projet: 'club', statut: 'en attente' } ]
[ { id: 0, nom: 'mouad', age: 22, projet: 'laboratoire', statut: 'en attente' }, { id: 1, nom: 'hamza', age: 19, projet: 'club', statut: 'en attente' } ]
[ { id: 0, nom: 'mouad', age: 22, projet: 'laboratoire', statut: 'en attente' }, { id: 1, nom: 'hamza', age: 19, projet: 'club', statut: 'validée' } ]
[ { id: 0, nom: 'mouad', age: 22, projet: 'laboratoire', statut: 'rejetée' }, { id: 1, nom: 'hamza', age: 19, projet: 'club', statut: 'validée' } ]
{
  id: 0,
  nom: 'mouad',
  age: 22,
  projet: 'laboratoire',
  statut: 'rejetée'
}

// Fonctions de base has finished