import { GenresMainPage, IMainPageModel } from '@/widgets/MainPageWidget/types/MainPageTypes'
import { BASE_URL } from '@/shared/lib/variables/variables'
import { $mainApi } from '@/shared/lib/axios/requester'
import { create } from 'zustand'

export const getAllGenre = async (): Promise<GenresMainPage> => {
    try {
        const response = await fetch(`${BASE_URL}genre/`, {
            next: {
                revalidate: 120
            }
        })
        return response.json()
    }
    catch (e) {
        return null
    }
}

export const useMainPageModel = create<IMainPageModel>((set) => ({
    mangasResponse: null,
    limit: 4,
    offset: 0,
    count: 0,
    page: 1,
    setPage: (newPage) => {
        set({ page: newPage})
    },
    setOffset: (newOffset) => {
        set({ offset: newOffset })
    },
    asyncGetAllMangas: async (limit: number, offset: number) => {
        try {
            const { data } = await $mainApi.get(`manga/?limit=${limit}&offset=${offset}`)
            console.log(data)
            set(() => ({
                mangasResponse: data ?? null,
                count: data?.count ?? 0
            }))
        }
        catch (e) {
            return null
        }
    }
}))