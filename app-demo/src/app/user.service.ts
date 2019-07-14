import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  authenticate(loginData : any) : Observable<any> {
   let url : string = "http://localhost:9090/login";
   return this.http.post(url, loginData);
  }
  registration(userData : any) : Observable<any> {
    let url : string = "http://localhost:9090/store";
    return this.http.post(url, userData);
  }
  getUser(id : number) : Observable<any> {
    let url : string = "http://localhost:9090/get/"+id;  // get/{id}
    return this.http.get(url);
  }
}
