import { create } from 'zustand'
import { IFilterBarTypes } from '@/features/MainPage/FilterBar/types/FilterBarTypes'


export const useFilterModel = create<IFilterBarTypes>((set, get) => ({
    isGenreFilter: true,
    setFilterType: () => {
        const { isGenreFilter } = get()
        set({ isGenreFilter: !isGenreFilter })
    }
}))