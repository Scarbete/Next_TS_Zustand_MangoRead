
export interface IMangaData {
    author: {
        id: number
        full_name: string
    }
    created: string
    description: string
    genre: number[]
    genre_list: string[]
    id: number
    image: string
    manga_review: any[]
    number_of_chapters: number
    release_year: number
    status_release: string
    status_translate: string
    tip: {
        id: number
        name: string
    }
    title: string
    updated: string
    views: number
}

export interface IHeaderSearchState {
    searchText: string
    isSearchFocus: boolean
    searchedMangas: IMangaData[]
    clearSearch: () => void
    setSearchText: (value: string) => void
    setIsSearchFocus: (bool: boolean) => void
    asyncSearchMango: (searchText: string) => void
}