'use client'
import { FC } from 'react'
import { IGenre } from '@/widgets/MainPageWidget/types/MainPageTypes'
import { useFilterModel } from '@/features/MainPage/FilterBar/model/FilterBarModel'
import CustomCheckbox from '@/shared/ui/CustomCheckBox/CustomCheckBox'
import Image from 'next/image'

import classes from './TypesFilterBar.module.sass'
import genresArrowImage from '@/shared/assets/images/Filter/genresArrow.svg'

import checkBoxOn from '@/shared/assets/images/Filter/checkBoxOn.svg'
import checkBoxOff from '@/shared/assets/images/Filter/checkBoxOff.svg'

interface Props {
    genres: IGenre[]
}

const TypesFilterBar: FC<Props> = props => {
    const { genres } = props
    const { setFilterType } = useFilterModel()

    return (
        <div className={classes.typesFilter}>
            <div
                className={classes.typesFilter__topBar}
                onClick={setFilterType}
            >
                <h3>Жанры</h3>
                <div className={classes.filterToggle}>
                    <span>Все</span>
                    <Image
                        src={genresArrowImage}
                        alt={'genresArrowImage'}
                        height={22}
                        width={12}
                    />
                </div>
            </div>
            <div className={classes.typesListBlock}>
                <h3>Тип</h3>
                <div className={classes.lists}>
                    {genres.map(item =>
                        <CustomCheckbox
                            key={item.id}
                            checkBoxOnImage={checkBoxOn}
                            checkBoxOffImage={checkBoxOff}
                        >
                            <p className={classes.checkBoxLabel}>
                                {item.name}
                            </p>
                        </CustomCheckbox>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TypesFilterBar