
export interface CursoSchema{
    id: number;
    name: string;
    codigo: string;
    picture: string;
    horario: string;
    start_date: string;
    end_date: string;
    teacher: number;
}

interface TeacherSchema{
    id: number;
    name: string;
}

export interface SvCursoSchema{
    id: number;
    name: string;
    codigo: string;
    picture: string;
    horario: string;
    start_date: string;
    end_date: string;
    teacher: TeacherSchema;
}

export class CursoModel {
    id: number;
    name: string;
    codigo: string;
    picture: string;
    horario: string;
    start_date: string;
    end_date: string;
    teacher: TeacherSchema;

    constructor(data: SvCursoSchema){
        this.id = data.id;
        this.name = data.name;
        this.codigo = data.codigo;
        this.picture = data.picture;
        this.horario = data.horario;
        this.start_date = data.start_date;
        this.end_date = data.end_date;
        this.teacher = data.teacher;

    }

    get teacherName():string{
        return this.teacher.name;
    }

}
