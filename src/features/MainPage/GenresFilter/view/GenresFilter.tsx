'use client'
import classes from './GenresFilter.module.sass'
import { FC } from 'react'
import { useFilterModel } from '@/features/MainPage/FilterBar/model/FilterBarModel'


const GenresFilter: FC = () => {
    const { setFilterType } = useFilterModel()

    return (
        <div className={classes.genresFilter} onClick={setFilterType}>
            TypesFilter
        </div>
    )
}

export default GenresFilter