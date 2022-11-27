export interface UserSchema{
    id: number;
    dni: string;
    username: string;
    password?: string;
    is_admin: boolean;
}

export interface UserLoginSchema{
    username: string;
    password?: string;
    is_admin: boolean;
}

export interface LoginSchema{
    username: string;
    password: string;
}

export interface SessionSchema{
    token: string;
    username: string;
    role: string;
}

export interface SvUserSchema{
    id: number;
    name: string;
    apellidos: string;
    edad: number;
    email: string;
}

export class UserModel{
    id: number;
    name: string;
    apellidos: string;
    edad: number;
    email: string;

    constructor(data: SvUserSchema){
        this.id = data.id;
        this.name = data.name;
        this.apellidos = data.apellidos;
        this.edad = data.edad;
        this.email = data.email;
    }

}