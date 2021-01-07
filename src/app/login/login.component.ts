import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  usuario: LoginUsuario;
  nombreUser: string;
  isLogged = false;
  isLoginFail = false;
  rol: string;
  id: string;
  errorMsg = 'Datos incorrectos';
  authority: string;
  nombre: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {

      if (this.tokenService.getToken()) {

      this.nombreUser = this.tokenService.getUserName();
      this.isLogged = true;
      this.isLoginFail = false;
      this.rol = this.tokenService.getRol();
      this.id = this.tokenService.getId();
      this.nombre = this.tokenService.getNombre();

      if (this.rol === 'jefe') {
          this.authority = 'jefe';
      } else if (this.rol === 'mentor') {
          this.authority = 'mentor';
      } else if (this.rol === 'mentorado') {
          this.authority = 'mentorado';
      }

      }
  }

    onLogin() {
    this.usuario = new LoginUsuario(this.form.username, this.form.password);

    this.authService.login(this.usuario).subscribe(data => {
      this.tokenService.setId(data.id);
      this.tokenService.setUserName(data.username);
      this.tokenService.setRol(data.rol);
      this.tokenService.setToken(data.token);
      this.tokenService.setNombre(data.nombre);
      
      window.location.reload();
    },
      (err: any) => {
        console.log(err);
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg;
      }
    );
  }

}
