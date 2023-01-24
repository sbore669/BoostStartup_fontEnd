import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projets } from '../Model/projets';
import { Startups } from '../Model/startups';

const AUTH_API = 'http://localhost:8080/api/projets';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient) { }

// methode pour creer un projets par startups id et par type de projets

  creerprojets(id_users: number,Idtypeprojets: number, file: File, projets: Projets): Observable<any> {
    
    const formData: FormData = new FormData();
    formData.append('file', file);
    console.log(projets)
    let donne = [
      projets
    ]
    formData.append('donneprojet', JSON.stringify(donne).slice(1, JSON.stringify(donne).lastIndexOf(']')));

    return this.http.post<any>(`${AUTH_API}/add/${id_users}/${Idtypeprojets}`, formData);
  }
}
