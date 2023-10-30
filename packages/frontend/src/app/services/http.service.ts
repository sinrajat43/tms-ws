import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  
  getData(): Observable<any> {
    const data=this.http.get<any>('http://localhost:3000/hello');
    return data;
  }

  getTripList(): Observable<any>{
    const trips=this.http.get<any>('http://localhost:3000/trip')
    return trips;
  }

  addTrip(tripData: any): Observable<any> {
    const url = 'http://localhost:3000/trip';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(url, JSON.stringify(tripData), { headers });
  }

}

