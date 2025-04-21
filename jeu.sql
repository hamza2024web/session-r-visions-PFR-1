-- Afficher les freelances qui parlent l’anglais (langues.nom = 'Anglais') avec un niveau avancé.
SELECT utilisateurs.nom FROM utilisateurs
INNER JOIN profil_langue ON profil_langue.profil_id = utilisateurs.id
WHERE profil_langue.niveau = 'avancé';

-- Lister les freelances ayant plus de 3 compétences.
SELECT utilisateurs.nom ,COUNT(profil_competence.profil_id) FROM utilisateurs
INNER JOIN profil_competence ON profil_competence.profil_id = utilisateurs.id
INNER JOIN competences ON competences.id = profil_competence.competence_id
GROUP BY profil_competence.profil_id
HAVING COUNT(profil_competence.profil_id) >= 3

-- Afficher les freelances disponibles, leur tarif horaire et leur ville.
SELECT utilisateurs.nom , profils.tarif_horaire , adresses.ville FROM utilisateurs
INNER JOIN profils ON profils.utilisateur_id = utilisateurs.id
INNER JOIN adresses ON adresses.utilisateur_id = utilisateurs.id
WHERE profils.disponible = 1

-- Lister tous les utilisateurs qui ne possèdent pas encore de profil.
SELECT utilisateurs.nom FROM utilisateurs
WHERE utilisateurs.id NOT IN (SELECT profils.utilisateur_id FROM profils)

-- Afficher les clients qui n'ont jamais publié de projet.
SELECT utilisateurs.nom FROM utilisateurs
WHERE utilisateurs.id NOT IN (SELECT projets.client_id FROM projets) AND utilisateurs.role = 'client'

-- Afficher les projets ouverts avec leur budget et leur nombre total d’offres reçues.
SELECT projets.titre , projets.budget , COUNT(offres.freelance_id) FROM projets
INNER JOIN offres ON offres.projet_id = projets.id
WHERE projets.statut = 'ouvert'
GROUP BY offres.projet_id

-- Lister les offres envoyées par des freelances dont le tarif horaire est inférieur à 100 MAD.
SELECT projets.titre , utilisateurs.nom , profils.tarif_horaire FROM projets
INNER JOIN offres ON projets.id = offres.projet_id
INNER JOIN utilisateurs ON utilisateurs.id = offres.freelance_id
INNER JOIN profils ON profils.utilisateur_id = utilisateurs.id
WHERE profils.tarif_horaire < 100

-- Afficher les projets qui ont reçu au moins 3 offres.
SELECT projets.titre , COUNT(offres.freelance_id) AS nbr_recue FROM projets
INNER JOIN offres ON offres.projet_id = projets.id
GROUP BY projets.titre
HAVING nbr_recue >= 3

-- Afficher les freelances qui ont postulé sur plus de 5 projets différents.
SELECT utilisateurs.nom , COUNT(offres.id) AS offre FROM offres
INNER JOIN utilisateurs ON utilisateurs.id = offres.freelance_id
WHERE utilisateurs.role = 'freelance'
GROUP BY utilisateurs.nom
HAVING offre > 5

-- Afficher les projets terminés avec les dates de début et de fin des missions associées.
SELECT projets.titre , missions.date_debut ,missions.date_fin FROM projets
INNER JOIN offres ON offres.projet_id = projets.id
INNER JOIN missions ON missions.offre_id = offres.id
WHERE projets.statut = 'terminé'
