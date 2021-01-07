export class NuevoUsuario {
    nombre: string;
    tipo_user: string;
    username: string;
    password: string;
    matricula: string;
    carrera: string;
    correo: string;
    telefono: string;
    promedio: string;
    grupo: string;
    // created_at: number;

    constructor(nombre: string, username: string, password: string, matricula: string, carrera: string, correo: string, telefono:string, promedio: string, grupo: string) {
        this.nombre = nombre;
        this.tipo_user = 'user';
        this.username = username;
        this.password = password;
        this.matricula = matricula;
        this.carrera = carrera;
        this.correo = correo;
        this.telefono = telefono;
        this.promedio = promedio;
        this.grupo = grupo;
       // this.created_at = new Date().getDate();
    }
}