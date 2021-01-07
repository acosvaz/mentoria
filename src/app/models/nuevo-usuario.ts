export class NuevoUsuario {
    nombre: string;
    tipo: string;
    username: string;
    password: string;
    matricula: string;
    carrera: string;
    semestre: string;
    grupo: string;
    edad: string;
    sexo: string;
    // created_at: number;

    constructor(nombre: string, username: string, password: string, matricula: string, carrera: string, semestre: string, grupo:string, edad: string, sexo: string) {
        this.nombre = nombre;
        this.tipo = 'user';
        this.username = username;
        this.password = password;
        this.matricula = matricula;
        this.carrera = carrera;
        this.semestre = semestre;
        this.grupo = grupo;
        this.edad = edad;
        this.sexo = sexo;
       // this.created_at = new Date().getDate();
    }
}