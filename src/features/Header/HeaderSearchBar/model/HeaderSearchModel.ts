import { create } from 'zustand'
import { IHeaderSearchState } from '@/features/Header/HeaderSearchBar/types/types'
import { CustomError } from '@/shared/types/types'
import { $mainApi } from '@/shared/lib/axios/requester'


export const useHeaderSearchModel = create<IHeaderSearchState>((set) => ({
    searchText: '',
    isSearchFocus: false,
    searchedMangas: [],
    setSearchText: (value) => {
        set({ searchText: value })
    },
    setIsSearchFocus: (bool) => {
        set({ isSearchFocus: bool })
    },
    clearSearch: () => {
        set(() => ({
            searchText: '',
            searchedMangas: []
        }))
    },
    asyncSearchMango: async (searchText) => {
        try {
            const { data } = await $mainApi.get(`manga/?title=${searchText}`)
            set({ searchedMangas: [...data.results] })
        }
        catch (error: CustomError) {
            console.error(error)
        }
    }
}))