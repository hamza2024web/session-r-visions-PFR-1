let candidatures = [];
// dans l'ajoute il ne faut pas return la valeur pour respecter le principe
function ajouterCandidature(nom, age, projet) {
  let id = candidatures.length; 
  candidatures.push({
    id: id,
    nom: nom,
    age: age,
    projet: projet,
    statut: "en attente"
  });
}
console.log(ajouterCandidature("mouad",22,"laboratoire"));
console.log(ajouterCandidature("hamza",19,"club"));

// alors dans chaque itération il ne faut pas faire return , il doit faire un console.log
function afficherToutesLesCandidatures(){
  for (let i=0;i<candidatures.length;i++){
    console.log(candidatures[i]);
  }
}

function validerCandidature(id) {
  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].id === id) { 
      candidatures[i].statut = "validée";
      console.log(`le candidat ${id} Validée.`);
    }
  }
  console.log("The candidate hasn't added");
}
console.log(validerCandidature(1))

function rejeterCandidature(id){
  for (let i =0; i<candidatures.length;i++){
    if (candidatures[i].id == id){
      candidatures[i].statut = "rejetée";
      console.log(`Le candidat ${id} rejetée`);
    }
  }
  console.log("The candidate hasn't added");
}
console.log(rejeterCandidature(0))

function rechercherCandidat(nom){
  let resultat = candidatures.find(c => c.nom === nom);
  if (resultat){
    console.log("Candidat trouvé :", resultat);
  } else {
    console.log("Le candidat n'existe pas.");
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


function filtrerParStatut(statut){
  let resultat = candidatures.filter(c => c.statut === statut);
  if (resultat.length > 0){
    console.log(`le candidature evec statut "${statut}" :`);  
    resultat.forEach(c => console.log(c));
  } else {
    console.log(`Aucune candidature avec le statut "${statut}".`);
  }
}
console.log(filtrerParStatut("rejetée"));

function statistiques(){
  let total = candidatures.length;
  let Validées = 0;
  let Rejetées = 0;
  let En_attente = 0;

  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].statut == "validée") {
      Validées++;
    }
  }

  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].statut == "rejetée") {
      Rejetées++;
    }
  }

  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].statut == "en attente") {  
      En_attente++;
    }
  }

  console.log("Total:", total);
  console.log("Validées:", Validées);
  console.log("Rejetées:", Rejetées);
  console.log("En attente:", En_attente); 
}


  function statistiques(){
    let total = candidatures.length ;
    let Validées = candidatures.filter(c => c.statut === "validée").length;
    let Rejetées = candidatures.filter(c => c.statut === "Rejetées").length;
    let En_attente = candidatures.filter(c => c.statut === "En_attente").length;

    console.log("📊 Statistiques des candidatures :");
    console.log("total:", total);
    console.log("Validées", Validées);
    console.log("Rejetées", Rejetées);
    console.log("En_attente", En_attente);
  }

