export interface Assistant {
    'name': string,
    'hours': string,
    'id' : string
}
export interface CouldWork {
    'begin' : string,
    'end' : string,
    'day' : string,
    'rname' : string,
    'doctor' : string,
    'id' : string
}

export interface Assingment {
    'day' : string,
    'rname' : string,
    'begin' : string,
    'end' : string,
    'assistant' : string,
    'doctor' : string,
    'id' : string
}

export interface CouldWorkWithoutID{
    'day' : string,
    'rname' : string,
    'begin' : string,
    'end' : string,
    'assistant' : string,
    'doctor' : string
}
