import { Injectable } from '@angular/core';
import { JWTCOGNITO } from './mock-cognito-aouth'


@Injectable({
  providedIn: 'root'
})

export class CognitoAouthService {
  getJwtCognito() { return JWTCOGNITO; }
}
