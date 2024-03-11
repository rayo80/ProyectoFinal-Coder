interface AlumnoInscripcionSchema{
    id: number;
    name: string;
}

interface CursoInscripcionSchema{
    id: number;
    name: string;
}

export interface InscripcionGETSchema{
    id: number;
    codigo: string;
    alumno: AlumnoInscripcionSchema;
    fecha: Date;
    curso: CursoInscripcionSchema;
}

export interface InscripcionSchema{
    id: number;
    monto: string;
    alumno: number;
    fecha: Date;
    curso: number;
}

export interface SvInscripcionSchema{
    id: number;
    monto: number;
    student: AlumnoInscripcionSchema;
    course: CursoInscripcionSchema;
    fecha: string;
}

export class InscripcionModel {
    id: number;
    monto: number;
    alumno: AlumnoInscripcionSchema;
    curso: CursoInscripcionSchema;
    fecha: string;
    
    constructor(data: SvInscripcionSchema){
        this.id = data.id;
        this.curso = data.course;
        this.monto = data.monto;
        this.alumno = data.student;
        this.fecha = data.fecha;

    }

    
    get alumnoName() : string {
        return this.alumno.name;
    }

    get cursoName() : string {
        return this.curso.name;
    }

}