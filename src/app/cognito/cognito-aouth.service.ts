import { Injectable } from '@angular/core';
import { JWTCOGNITO } from './mock-cognito-aouth'
import { JwtCognito } from './jwt-cognito';


@Injectable({
  providedIn: 'root'
})

export class CognitoAouthService {

  constructor() {}

  getJwtCognito(): Promise<JwtCognito>{ return Promise.resolve(JWTCOGNITO); }
}
