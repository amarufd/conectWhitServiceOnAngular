import { Component, OnInit } from '@angular/core';

import { JwtCognito } from "./jwt-cognito";
import { CognitoAouthService } from './cognito-aouth.service';

@Component({
  selector: 'app-cognito',
  templateUrl: './cognito.component.html',
  providers: [CognitoAouthService],
  styleUrls: ['./cognito.component.css']
})
export class CognitoComponent implements OnInit {

  jwtCognito: JwtCognito = {
        AccessToken: "",
        ExpiresIn: 0,
        TokenType: "",
        RefreshToken: "",
        IdToken: "",
    };

  constructor(private CognitoAouthService: CognitoAouthService) { }

  ngOnInit(){
    this.getJwtCognito();
  }

  getJwtCognito(): void {
    this.CognitoAouthService.getJwtCognito().subscribe(jwtCognito => this.jwtCognito = jwtCognito);
  }

}
