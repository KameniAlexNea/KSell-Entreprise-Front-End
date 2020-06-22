export class User {

    private mail: string = "";
    private pays: string = "";
    private profil: string = "";
    private dateNaissance: Date = null;
    private nbreCompetition: number = 0;
    private nbreEtoile: number = 0;
    private fortune: number = 0;
    private nbreCarte: number = 0;
    private listeCarte: Array<String> = new Array();
    private nbreAbonnes: number;
    private listeAbonnes: Array<String> = new Array();
    private nbreAbonnemments: number = 0;
    private listeAbonnements: Array<String> = new Array();
    private isVerified: boolean = false;

    /**
     * Getter $mail
     * @return {string }
     */
    public get $mail(): string {
        return this.mail;
    }

    /**
     * Getter $pays
     * @return {string }
     */
    public get $pays(): string {
        return this.pays;
    }

    /**
     * Getter $profil
     * @return {string }
     */
    public get $profil(): string {
        return this.profil;
    }

    /**
     * Getter $dateNaissance
     * @return {Date }
     */
    public get $dateNaissance(): Date {
        return this.dateNaissance;
    }

    /**
     * Getter $nbreCompetition
     * @return {number }
     */
    public get $nbreCompetition(): number {
        return this.nbreCompetition;
    }

    /**
     * Getter $nbreEtoile
     * @return {number }
     */
    public get $nbreEtoile(): number {
        return this.nbreEtoile;
    }

    /**
     * Getter $fortune
     * @return {number }
     */
    public get $fortune(): number {
        return this.fortune;
    }

    /**
     * Getter $nbreCarte
     * @return {number }
     */
    public get $nbreCarte(): number {
        return this.nbreCarte;
    }

    /**
     * Getter $listeCarte
     * @return {Array<String> }
     */
    public get $listeCarte(): Array<String> {
        return this.listeCarte;
    }

    /**
     * Getter $nbreAbonnes
     * @return {number}
     */
    public get $nbreAbonnes(): number {
        return this.nbreAbonnes;
    }

    /**
     * Getter $listeAbonnes
     * @return {Array<String> }
     */
    public get $listeAbonnes(): Array<String> {
        return this.listeAbonnes;
    }

    /**
     * Getter $nbreAbonnemments
     * @return {number }
     */
    public get $nbreAbonnemments(): number {
        return this.nbreAbonnemments;
    }

    /**
     * Getter $listeAbonnements
     * @return {Array<String> }
     */
    public get $listeAbonnements(): Array<String> {
        return this.listeAbonnements;
    }

    /**
     * Getter $isVerified
     * @return {boolean }
     */
    public get $isVerified(): boolean {
        return this.isVerified;
    }

    /**
     * Setter $mail
     * @param {string } value
     */
    public set $mail(value: string) {
        this.mail = value;
    }

    /**
     * Setter $pays
     * @param {string } value
     */
    public set $pays(value: string) {
        this.pays = value;
    }

    /**
     * Setter $profil
     * @param {string } value
     */
    public set $profil(value: string) {
        this.profil = value;
    }

    /**
     * Setter $dateNaissance
     * @param {Date } value
     */
    public set $dateNaissance(value: Date) {
        this.dateNaissance = value;
    }

    /**
     * Setter $nbreCompetition
     * @param {number } value
     */
    public set $nbreCompetition(value: number) {
        this.nbreCompetition = value;
    }

    /**
     * Setter $nbreEtoile
     * @param {number } value
     */
    public set $nbreEtoile(value: number) {
        this.nbreEtoile = value;
    }

    /**
     * Setter $fortune
     * @param {number } value
     */
    public set $fortune(value: number) {
        this.fortune = value;
    }

    /**
     * Setter $nbreCarte
     * @param {number } value
     */
    public set $nbreCarte(value: number) {
        this.nbreCarte = value;
    }

    /**
     * Setter $listeCarte
     * @param {Array<String> } value
     */
    public set $listeCarte(value: Array<String>) {
        this.listeCarte = value;
    }

    /**
     * Setter $nbreAbonnes
     * @param {number} value
     */
    public set $nbreAbonnes(value: number) {
        this.nbreAbonnes = value;
    }

    /**
     * Setter $listeAbonnes
     * @param {Array<String> } value
     */
    public set $listeAbonnes(value: Array<String>) {
        this.listeAbonnes = value;
    }

    /**
     * Setter $nbreAbonnemments
     * @param {number } value
     */
    public set $nbreAbonnemments(value: number) {
        this.nbreAbonnemments = value;
    }

    /**
     * Setter $listeAbonnements
     * @param {Array<String> } value
     */
    public set $listeAbonnements(value: Array<String>) {
        this.listeAbonnements = value;
    }

    /**
     * Setter $isVerified
     * @param {boolean } value
     */
    public set $isVerified(value: boolean) {
        this.isVerified = value;
    }


}
