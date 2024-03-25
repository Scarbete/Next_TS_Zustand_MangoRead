'use client'
import { FC } from 'react'
import { IGenre } from '@/widgets/MainPageWidget/types/MainPageTypes'
import { useFilterModel } from '@/features/MainPage/FilterBar/model/FilterBarModel'

import CustomButton from '@/shared/ui/CustomButton/view/CustomButton'
import { TypesFilterBar } from '@/features/MainPage/TypesFilterBar'
import { GenresFilter } from '@/features/MainPage/GenresFilter'

import classes from './FilterBar.module.sass'

interface Props {
    genres: IGenre[]
}

const FilterBar: FC<Props> = props => {
    const { genres } = props
    const { isGenreFilter } = useFilterModel()

    return (
        <div className={classes.filterBar}>
            <div
                className={classes.filterSlider}
                style={{marginLeft: isGenreFilter ? '0' : '-500px'}}
            >
                <TypesFilterBar genres={genres} />
                <GenresFilter/>
            </div>
            <div className={classes.bottomButtons}>
                <CustomButton variant={'secondary'}>
                    Сбросить
                </CustomButton>
                <CustomButton>
                    Применить
                </CustomButton>
            </div>
        </div>
    )
}

export default FilterBar