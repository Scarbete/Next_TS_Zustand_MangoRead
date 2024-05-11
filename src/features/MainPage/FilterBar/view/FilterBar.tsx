'use client'
import { FC } from 'react'
import classNames from 'classnames'
import { useFilterModel } from '@/features/MainPage/FilterBar/model/FilterBarModel'

import CustomButton from '@/shared/ui/CustomButton/view/CustomButton'
import { TypesFilterBar } from '@/features/MainPage/TypesFilterBar'
import { GenresFilter } from '@/features/MainPage/GenresFilter'

import classes from './FilterBar.module.sass'


const FilterBar: FC = () => {
    const { isGenreFilter } = useFilterModel()

    return (
        <div className={classes.filterBar}>
            <div className={classNames(classes.filterSlider, {[classes.space]: isGenreFilter})}>
                <TypesFilterBar />
                <GenresFilter />
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