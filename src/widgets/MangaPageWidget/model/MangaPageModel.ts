import { create } from 'zustand'
import { IMangaPageModelState } from '@/widgets/MangaPageWidget/types/MangaPageTypes'
import { $mainApi } from '@/shared/lib/axios/requester'
import { AxiosResponse } from 'axios'
import { BASE_URL } from '@/shared/lib/variables/variables'


export const asyncGetManga = async (id: number) => {
    try {
        const response = await fetch(`${BASE_URL}manga/${id}/`)
        return response.json()
    }
    catch (error) {
        return null
    }
}


export const useMangaPageModel = create<IMangaPageModelState>(() => ({
    // mangaData: null,
    // asyncGetManga: async (id: number) => {
    //     try {
    //         const response = $mainApi.get(`manga/${id}/`)
    //         // console.log(response)
    //         return response.data
    //     }
    //     catch (error) {
    //         return null
    //     }
    // }
}))