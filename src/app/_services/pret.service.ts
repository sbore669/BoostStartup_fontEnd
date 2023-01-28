import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/pret';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PretService {

  constructor(private http: HttpClient) { }

  faireunPret(idprojet: number,idUsers: number,montantInvest: any): Observable<any>{

    const formData: FormData = new FormData();
    formData.append('montantInvest', montantInvest);
    console.log(montantInvest)

    return this.http.post(`${AUTH_API}/add/${idUsers}/${idprojet}/` , formData);
  }
}
