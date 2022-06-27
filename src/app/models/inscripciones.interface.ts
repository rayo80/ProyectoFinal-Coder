interface AlumnoInscripcionSchema{
    id: number;
    name: string;
}


export interface InscripcionGETSchema{
    id: number;
    codigo: string;
    alumno: AlumnoInscripcionSchema;
    fecha: Date;
    curso: number;
}

export interface InscripcionSchema{
    id: number;
    codigo: string;
    alumno: number;
    fecha: Date;
    curso: number;
}