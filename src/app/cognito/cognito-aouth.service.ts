import { Observable, from } from 'rxjs';
//import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { JwtCognito } from "./jwt-cognito";
import {HttpHeaders,HttpClient} from "@angular/common/http";

import { environment } from '../../environments/environment';

//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';


@Injectable({
  providedIn: 'root'
})

export class CognitoAouthService {

  constructor(private http:HttpClient) {}
  
  getJwtCognito(): Observable<JwtCognito>{

    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("x-api-key", environment.apiKey);
    
    
    let body = {
      "username": environment.username,
      "password": environment.password,
      "userPoolId": environment.userPoolId
    };

    var resp = this.http.post<JwtCognito>(environment.endPoint,body,{headers})
    .pipe();

    return resp;

    

    //return Promise.resolve(JWTCOGNITO); 
  }
}
