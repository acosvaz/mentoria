import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: any = {};
  private usuario: any = {};
  isRegisterFail = false;
  errorMsg = 'Coloca todos los campos obligatorios';

  constructor(private authService: AuthService, private router: Router) { }

  listOne = ['Ingenieria en Sistemas Computacionales', 'Ingenieria en Industrias Alimentarias', 'Ingenieria en Energias Renovables', 'Licenciatura en Administracion','Licenciatura en Gastronomia', 'Licenciatura en Turismo'];
  listTwo = ['Mujer', 'Hombre'];

  ngOnInit() {
  }

onRegister() {
    this.usuario = new NuevoUsuario(this.form.nombre, this.form.username, this.form.password, this.form.matricula, this.form.carrera, this.form.correo, this.form.telefono, this.form.promedio, this.form.grupo);
    this.authService.registro(this.usuario).subscribe(data => {
      this.isRegisterFail = false;
      this.router.navigate(['login']);
    },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg;
        this.isRegisterFail = true;
      }
    );
  }

}

