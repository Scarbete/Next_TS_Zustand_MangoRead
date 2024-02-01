'use client'
import { ChangeEvent, FC } from 'react'
import { Pagination, ThemeProvider } from '@mui/material'
import { useMainPageModel } from '@/widgets/MainPageWidget/model/MainPageModel'
import { theme } from '@/shared/assets/muiTheme/muiTheme'
import classes from './MangaPagination.module.sass'
import {useScrollToTop} from "@/shared/lib/hooks/useScrollToTop";


const MangaPagination: FC = () => {
    const {
        limit,
        count,
        page,
        setPage,
        setOffset
    } = useMainPageModel()

    const allPages = count && limit ? Math.ceil(Number(count) / Number(limit)) : 1

    const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
        const newOffset = (newPage - 1) * limit
        setPage(newPage)
        setOffset(newOffset)
        useScrollToTop()
    }

    return (
        <div className={classes.mangaPagination}>
            <div className={classes.pagination}>
                <ThemeProvider theme={theme}>
                    <Pagination
                        count={allPages}
                        size={'large'}
                        page={page}
                        onChange={handleChangePage}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default MangaPagination