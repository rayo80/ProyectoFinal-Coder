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
    first_name: string;
    last_name: string;
    is_staff: boolean;
    email: string;
    user_type: number;
}

export class UserModel {
    id: number;
    name: string;
    apellidos: string;
    is_staff: boolean;
    email: string;
    user_type: number;

    constructor(data: SvUserSchema){
        this.id = data.id;
        this.name = data.first_name;
        this.apellidos = data.last_name;
        this.is_staff = data.is_staff;
        this.email = data.email;
        this.user_type = data.user_type;
    }

}