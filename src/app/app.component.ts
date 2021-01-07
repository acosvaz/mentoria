import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'asesorias';
  isLogin = false;
  roles: string;
  authority: string;

   constructor(private tokenService: TokenService, private router: Router) { }

 ngOnInit() {

 	  if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = this.tokenService.getRol();

      if (this.roles === 'jefe') {
          this.authority = 'jefe';
      } else if (this.roles === 'mentor') {
          this.authority = 'mentor';
      } else if (this.roles === 'mentorado') {
          this.authority = 'mentorado';
      }

    }

 }

 logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['home']);
    }

}
