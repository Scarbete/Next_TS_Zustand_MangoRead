'use client'
import { FC, useEffect } from 'react'

import { useMainPageModel } from '@/widgets/MainPageWidget'
import { IMainPageProps } from '@/widgets/MainPageWidget/types/MainPageTypes'

import { AuthModal } from '@/entities/AuthModal'
import { FilterBar } from '@/features/MainPage/FilterBar'
import { MangaList } from '@/features/MainPage/MangaList'
import { MangaPagination } from '@/features/MainPage/MangaPagination'

import classes from './MainPageWidget.module.sass'


const MainPageWidget: FC<IMainPageProps> = props => {
    const { genres } = props

    const {
        mangasResponse,
        limit,
        offset,
        page,
        asyncGetAllMangas
    } = useMainPageModel()

    useEffect(() => {
        asyncGetAllMangas(limit, offset)
    }, [page])

    return (
        <div className={classes.mainPageWidget}>
            <AuthModal />
            <div className={classes.widget}>
                <FilterBar genres={genres ?? []} />
                <MangaList mangas={mangasResponse?.results ?? []} />
            </div>
            <MangaPagination />
        </div>
    )
}

export default MainPageWidget