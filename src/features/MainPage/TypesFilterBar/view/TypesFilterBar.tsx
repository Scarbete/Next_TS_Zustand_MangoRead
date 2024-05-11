'use client'
import { FC } from 'react'

import Image from 'next/image'
import CustomCheckbox from '@/shared/ui/CustomCheckBox/view/CustomCheckBox'
import { useFilterModel } from '@/features/MainPage/FilterBar'
import { useMainPageModel } from '@/widgets/MainPageWidget'


import genresArrowImage from '@/shared/assets/images/Filter/genresArrow.svg'
import checkBoxOnImage from '@/shared/assets/images/Filter/checkBoxOn.svg'
import checkBoxOffImage from '@/shared/assets/images/Filter/checkBoxOff.svg'
import classes from './TypesFilterBar.module.sass'


const TypesFilterBar: FC = () => {
    const { setFilterType } = useFilterModel()
    const { genresResponse } = useMainPageModel()

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
                    {genresResponse?.map(item =>
                        <CustomCheckbox
                            key={item.id}
                            checkBoxOnImage={checkBoxOnImage}
                            checkBoxOffImage={checkBoxOffImage}
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