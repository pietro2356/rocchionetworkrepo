class Stato{
    private bianco: number;
    private verde: number;
    private azzurro: number;
    private arancione: number;
    private giallo: number;
    private rosso: number;

    constructor(bianco: number, verde: number, azzurro: number, arancione: number, giallo: number, rosso: number){
        this.bianco = bianco;
        this.verde = verde;
        this.azzurro = azzurro;
        this.arancione = arancione;
        this.giallo = giallo;
        this.rosso = rosso;
    }

    getState(){
        return new Array(this.bianco, this.verde, this.azzurro, this.arancione, this.giallo, this.rosso); 
    }
}