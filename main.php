<?php

interface ReservableInterface {
    public function reserver(Client $client , DateTime $dateDebut , $nbJours) : Reservation;

}



abstract class Vehicule {
    protected $id;
    protected $immatriculation;
    protected $marque;
    protected $modele;
    protected $prixJour;
    protected $disponible;

    public function __construct($id,$immatriculation,$marque,$modele,$prixJour,$disponible)
    {
        $this->id = $id;
        $this->immatriculation = $immatriculation;
        $this->marque = $marque;
        $this->modele = $modele;
        $this->prixJour = $prixJour;
        $this->disponible = $disponible;
    }

    public function afficherDetails(){
        return $this->immatriculation.',' .$this->marque .',' .$this->modele. ',' .$this->prixJour.',' .$this->disponible;
    }

    public function calculerPrix($nbJours){
        $prix = $this->prixJour * $nbJours;
        return $prix;
    }

    public function estDisponible($disponible){
        return $disponible;
    }

    public abstract function getType();
}




class Voiture extends Vehicule implements ReservableInterface {
    private $nbPortes ;
    private $transmission;

    public function __construct($id,$immatriculation,$marque,$modele,$prixJour,$disponible,$nbPortes,$transmission)
    {
        parent::__construct($id,$immatriculation,$marque,$modele,$prixJour,$disponible);
        $this->nbPortes = $nbPortes;
        $this->transmission = $transmission;
    }

    public function reserver(Client $client, DateTime $dateDebut, $nbJours): Reservation
    {
        
    }


    public function getType()
    {
        return $this->marque;
    }

    public function afficherDetails(){
        return parent::afficherDetails() .$this->nbPortes.',' .$this->transmission. '.';
    }
    
}


class Camion extends Vehicule implements ReservableInterface {
    private $capaciteTonnage;
    
    public function reserver(Client $client, DateTime $dateDebut, $nbJours): Reservation
    {
        
    }

    public function getType()
    {
        return $this->marque;
    }
}


abstract class Personne{
    protected $nom;
    protected $prenom;
    protected $email;

    public function __construct($nom,$prenom,$email)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
    }

    public abstract function afficherProfil();
}


class Client extends Personne {
    private $numeroClient;
    private $reservations = [];

    public function __construct($nom,$prenom,$email,$numeroClient,$reservations)
    {
        parent::__construct($nom,$prenom,$email);
        $this->numeroClient = $numeroClient;
        $this->reservations = $reservations;
    }

    public function afficherProfil()
    {
        return '-' .$this->nom. ',' .$this->prenom. ',' .$this->email. ',' .$this->numeroClient. '.';
    }

    public function ajouterReservation(Reservation $r){
        return array_push($this->reservations,$r);
    }

    public function getHistorique($reservations){
        foreach ($reservations as $reservation) {
            return $reservation;
        }
    }
}

class Agence {
    private $nom;
    private $ville;
    private $vehicules = [];
    private $clients = [];

    public function __construct($nom,$ville,$vehicules,$clients)
    {
        $this->nom = $nom;
        $this->ville = $ville;
        $this->vehicules = $vehicules;
        $this->clients = $clients;
    }

    public function ajouterVehicule(Vehicule $v){
        return array_push($this->vehicules , $v);
    }

    public function rechercherVehiculeDisponible($type){
        foreach ($this->vehicules as $vehicule){
            if ($vehicule["marque"] == $type){
                return $vehicule;
            } else {
                echo "undefined type of vehicule";
            }
        }
    }

    public function enregistrerClient(Client $c){
        return array_push($this->clients,$c);
    }

    public function faireReservation(Client $client , Vehicule $v , DateTime $dateDebut , int $nbJours){
        return new Reservation($v,$client,$dateDebut,$nbJours,$statut = null);
    }


}

class Reservation {
    private Vehicule $vehicule;
    private $client;
    private $dateDebut;
    private $nbJours;
    private $statut;

    public function __construct($vehicule,$client,$dateDebut,$nbJours,$statut)
    {
        $this->vehicule = $vehicule;
        $this->client = $client;
        $this->dateDebut = $dateDebut;
        $this->nbJours = $nbJours;
        $this->statut = "pending";
    }

    public function calculerMontant($nbJours){
        return $this->vehicule->calculerPrix($nbJours);
    }

    public function confirmer(){
        return $this->statut = "accept";
    }

    public function annuler(){
        // delete in the array
        return $this->statut = "annuler";
    }
}
?>

