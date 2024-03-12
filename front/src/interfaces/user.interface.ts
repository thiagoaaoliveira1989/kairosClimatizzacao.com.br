export interface IUsers {
    id: number;
    username: string;
    email: string;
    admin: boolean;
}

export interface ICreatedUsers {
    username: string;
    email: string;
    password: string;
    admin: boolean;
}

export interface IUpdateUsers {
    id: number;
    username: string | undefined;
    email: string | undefined;
    admin: boolean | false;
}


export interface ILogin {
    email: string,
    password: string
}