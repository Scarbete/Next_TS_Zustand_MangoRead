import {
    GenresMainPage,
    IMainPageModel,
    MangasMainPage
} from '@/widgets/MainPageWidget/types/MainPageTypes'

import { $mainApi } from '@/shared/lib/axios/requester'
import { create } from 'zustand'


export const getAllGenre = async (): Promise<GenresMainPage> => {
    try {
        const { data } = await $mainApi.get(`genre`)
        return data
    }
    catch (e) {
        return null
    }
}

export const getAllMangas = async (limit: number, offset: number): Promise<MangasMainPage> => {
    try {
        const { data } = await $mainApi.get(`manga/?limit=${limit}&offset=${offset}`)
        return data
    }
    catch (e) {
        return null
    }
}


export const useMainPageModel = create<IMainPageModel>((set, get) => ({
    mangasResponse: null,
    genresResponse: null,
    limit: 12,
    offset: 0,
    count: 0,
    page: 1,
    setPage: (newPage) => {
        set({ page: newPage})
    },
    setOffset: (newOffset) => {
        set({ offset: newOffset })
    },
    getAllMangas: async () => {
        const { limit, offset } = get()
        const data = await getAllMangas(limit, offset)
        set(() => ({
            mangasResponse: data?.results ?? null,
            count: data?.count ?? 0
        }))
    },
    getAllGenres: async () => {
        const data = await getAllGenre()
        set({ genresResponse: data?.results })
    }
}))