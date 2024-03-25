'use client'
import { ChangeEvent, FC } from 'react'
import { Pagination, ThemeProvider } from '@mui/material'
import { useScrollToTop } from '@/shared/lib/hooks/useScrollToTop'
import { useMainPageModel } from '@/widgets/MainPageWidget'
import { theme } from '@/shared/assets/muiTheme/muiTheme'
import classes from './MangaPagination.module.sass'

const useScrollToTopOnChangePage = () => {
    useScrollToTop()
}

const MangaPagination: FC = () => {
    const {
        limit,
        count,
        page,
        setPage,
        setOffset
    } = useMainPageModel()

    const allPages = count && limit
        ? Math.ceil(Number(count) / Number(limit))
        : 1

    useScrollToTopOnChangePage()

    const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
        const newOffset = (newPage - 1) * limit
        setPage(newPage)
        setOffset(newOffset)
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