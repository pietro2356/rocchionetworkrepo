export class ProntoSoccorso {
    codice: string;
    descrizione: string;
    direttore: string;
    localita: string;
    messaggio: string;
    ospedale: string;
    ambulatorio: Stato;
    attesa: Stato;
    osservazione: Stato;

    constructor(codice: string, descrizione: string, direttore: string, localita: string, messaggio: string, ospedale: string, ambulatorio: Stato, attesa: Stato, osservazione: Stato) {
        this.codice = codice
        this.descrizione = descrizione
        this.direttore = direttore
        this.localita = localita
        this.messaggio = messaggio
        this.ospedale = ospedale
        this.ambulatorio = ambulatorio
        this.attesa = attesa
        this.osservazione = osservazione
    }

    
}