import { Educacion } from "./Educacion";
import { Experiencia } from "./Experiencia";
import { Informacion } from "./Informacion";
import { Proyecto } from "./Proyecto";
import { Skill } from "./Skill";

export class Usuario {
    idUsuario: number;
    username: string;
    password: string;
    email: string;
    informacion: Informacion;
    educacion: Educacion[];
    experiencias: Experiencia[];
    proyectos: Proyecto[];
    skills: Skill[];
}