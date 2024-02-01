import { IResponse } from '@/shared/types/types'

export interface IManga {
    id?: number
    title?: string
    image?: string
    description?: string
    status_release?: 'yes' | 'no'
    status_translate?: 'yes' | 'no'
    number_of_chapters?: number
    created?: string
    genre_list?: string[]
    manga_review?: any[]
    tip?: {
        id?: number
        name?: string
    }
    author?: {
        id?: number
        full_name?: string
    }
    updated?: string
    release_year?: number
    views?: number
    genre?: number[]
}

export interface IGenre {
    id?: number
    name?: string
}

export interface IMainPageProps {
    genres?: IGenre[] | null
}

export interface ResponseMangaMainPage extends IResponse {
    results?: IManga[]
}

export interface ResponseGenreMainPage extends IResponse {
    results?: IGenre[]
}

export type MangasMainPage = ( ResponseMangaMainPage | null | undefined )
export type GenresMainPage = ( ResponseGenreMainPage | null | undefined )

export interface IMainPageModel {
    mangasResponse: MangasMainPage
    limit: number
    offset: number
    count: number
    page: number
    setPage: (newPage: number) => void
    setOffset: (newOffset: number) => void
    asyncGetAllMangas: (limit: number, offset: number) => void
}