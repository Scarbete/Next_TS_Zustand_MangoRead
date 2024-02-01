
export type CustomError = any

export interface IResponse {
    count?: number,
    next?: string | null,
    previous?: string | null,
}

export interface IFullUserData {
    username?: string
    nickname?: string
    password?: string
    image?: File | null | string
}