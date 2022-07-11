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
    codigo: string;
    alumno: number;
    fecha: Date;
    curso: number;
}