export interface Personas {
    results: Result[];
    info:    Info;
}

export interface Info {
    seed:    string;
    results: string;
    page:    string;
    version: string;
    time:    Time;
    user:    User;
}

export interface Time {
    instruct: number;
    generate: number;
}

export interface User {
    username:  string;
    tier:      string;
    results:   string;
    remaining: string;
}

export interface Result {
    persona: Persona;
}

export interface Persona {
    id?:        string;
    nombre:    string;
    edad:      number;
    sexo:      string;
    documento: string;
}
