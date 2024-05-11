'use client'
import { FC, useEffect } from 'react'
import { useMainPageModel } from '@/widgets/MainPageWidget'

import { AuthModal } from '@/entities/AuthModal'
import { ProfileModal } from '@/entities/ProfileModal'
import { FilterBar } from '@/features/MainPage/FilterBar'
import { MangaList } from '@/features/MainPage/MangaList'
import { MangaPagination } from '@/features/MainPage/MangaPagination'

import classes from './MainPageWidget.module.sass'


const MainPageWidget: FC = () => {

    const {
        page,
        getAllMangas,
        getAllGenres
    } = useMainPageModel()

    useEffect(() => {
        getAllMangas()
        getAllGenres()
    }, [page])

    return (
        <div className={classes.mainPageWidget}>
            <AuthModal />
            <ProfileModal />
            <div className={classes.widget}>
                <FilterBar />
                <MangaList />
            </div>
            <MangaPagination />
        </div>
    )
}

export default MainPageWidget