'use client'
import { FC, useEffect } from 'react'
import { IMainPageProps } from '@/widgets/MainPageWidget/types/MainPageTypes'
import { useMainPageModel } from '@/widgets/MainPageWidget/model/MainPageModel'
import { useScrollToTop } from '@/shared/lib/hooks/useScrollToTop'

import AuthModal from '@/entities/AuthModal/view/AuthModal'
import FilterBar from '@/features/MainPage/FilterBar/view/FilterBar'
import MangaList from '@/features/MainPage/MangaList/view/MangaList'
import MangaPagination from '@/features/MainPage/MangaPagination/view/MangaPagination'

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
        useScrollToTop()
    }, [page])

    return (
        <div className={classes.mainPageWidget}>
            <AuthModal/>
            <div className={classes.widget}>
                <div>
                    <FilterBar genres={genres ?? []} />
                </div>
                <div>
                    <MangaList mangas={mangasResponse?.results ?? []} />
                </div>
            </div>
            <MangaPagination />
        </div>
    )
}

export default MainPageWidget