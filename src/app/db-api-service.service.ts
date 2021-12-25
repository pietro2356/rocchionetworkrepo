import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProntoSoccorso } from './model/ProntoSoccorso.model';

const apiPath = "https://servizi.apss.tn.it/opendata/STATOPS001.json";

@Injectable({
  providedIn: 'root'
})
export class DbApiServiceService {

  constructor(private http: HttpClient, private ps: ProntoSoccorso) { }

  getPS(){
    // TODO: Da fare!
    // data[i].risposta.pronto_soccorso.reparto.descrizione
  }
}
