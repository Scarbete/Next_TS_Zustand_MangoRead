'use client'
import { FC, useEffect } from 'react'
import { IMainPageProps, useMainPageModel } from '@/widgets/MainPageWidget'

import { AuthModal } from '@/entities/AuthModal'
import { ProfileModal } from '@/entities/ProfileModal'
import { FilterBar } from '@/features/MainPage/FilterBar'
import { MangaList } from '@/features/MainPage/MangaList'
import { MangaPagination } from '@/features/MainPage/MangaPagination'

import classes from './MainPageWidget.module.sass'


const MainPageWidget: FC<IMainPageProps> = (props) => {
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
            <ProfileModal />
            <div className={classes.widget}>
                <FilterBar genres={genres ?? []} />
                <MangaList mangas={mangasResponse?.results ?? []} />
            </div>
            <MangaPagination />
        </div>
    )
}

export default MainPageWidget