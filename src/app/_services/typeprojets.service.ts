import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/typeprojets';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeprojetsService {

  constructor(private http: HttpClient) { }

  listetypeprojets(): Observable<any>{
    return this.http.get(`${AUTH_API}/afficher`);
  }


}
