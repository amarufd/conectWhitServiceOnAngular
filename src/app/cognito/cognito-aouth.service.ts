import { Injectable } from '@angular/core';
import { JWTCOGNITO } from './mock-cognito-aouth'
import { JwtCognito } from './jwt-cognito';
import {HttpHeaders,HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class CognitoAouthService {

  constructor(private http:HttpClient) {}
  
  getJwtCognito(): Promise<JwtCognito>{
    
    console.log("tonteras")

    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("x-api-key", "")
      .set('Access-Control-Allow-Origin', '*');
      
    let body = {
      "username": "",
      "password": "",
      "userPoolId": ""
    };

    this.http.post("",body,{headers})
    .subscribe(data  => {
      console.log("POST Request is successful ", data);
    },error  => {
      console.log("Error", error);
    });

    return Promise.resolve(JWTCOGNITO); 
  }
}
