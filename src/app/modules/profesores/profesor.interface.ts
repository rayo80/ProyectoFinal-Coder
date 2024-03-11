export interface ProfesorSchema{
    id: number;
    name: string;
    codigo: string;
    formacion: string;
    picture: string;
    email: string;
}

export class ProfesorModel {
    id: number;
    name: string;
    codigo: string;
    formacion: string;
    picture: string;

    constructor(data: ProfesorSchema){
        this.id = data.id;
        this.name = data.name;
        this.codigo = data.codigo;
        this.formacion = data.formacion;
        this.picture= data.picture;
    }

    get label(): string{
        return this.id+"-"+this.name;
    }

}