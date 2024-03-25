'use client'
import { FC } from 'react'
import { useFilterModel } from '@/features/MainPage/FilterBar/model/FilterBarModel'
import classes from './GenresFilter.module.sass'


const GenresFilter: FC = () => {
    const { setFilterType } = useFilterModel()

    return (
        <div className={classes.genresFilter} onClick={setFilterType}>
            TypesFilter
        </div>
    )
}

export default GenresFilter