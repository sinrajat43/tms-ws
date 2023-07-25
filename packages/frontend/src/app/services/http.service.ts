import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  
  getData(): Observable<any> {
    const data=this.http.get<any>('http://localhost:3000/hello');
    console.log('in service',data)
    return data;
  }
}

