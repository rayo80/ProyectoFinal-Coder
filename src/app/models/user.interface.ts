export interface UserSchema{
    id: number;
    dni: string;
    username: string;
    password: string;
    is_admin: boolean;
}

export interface LoginSchema{
    username: string;
    password: string;
}