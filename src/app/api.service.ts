import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  clientData(endpoint:any,params:any){
    return this.http.post(environment.Url + endpoint,params)
  }
}
