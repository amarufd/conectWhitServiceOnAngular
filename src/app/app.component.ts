import { Component , OnInit} from '@angular/core';
import { JwtCognito } from './cognito/jwt-cognito';
import { CognitoAouthService } from './cognito/cognito-aouth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jwtCognito: JwtCognito;

  title = 'app con coneccion a angular';

  constructor(private CognitoAouthService: CognitoAouthService) {}

  ngOnInit(): void {
    this.CognitoAouthService.getJwtCognito().then(jwtCognito => this.jwtCognito = jwtCognito);
  }
}
