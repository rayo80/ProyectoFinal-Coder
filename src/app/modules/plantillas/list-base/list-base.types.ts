
export interface IMenuItems {
    name: string;
    disabled: boolean;
    codigo?: string;
}

export interface IListColums{
    name: string;
    code: string;
    sort?: string;
    class?: string;
    ancho?: number;
    vista?: string;
}

export interface ViewerInterface {
    getList(): void;

}

