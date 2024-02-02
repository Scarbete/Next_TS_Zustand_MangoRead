'use client'
import Image from 'next/image'
import { ChangeEventHandler, FC, useEffect } from 'react'

import classes from './HeaderSearchBar.module.sass'
import searchImage from '@/shared/assets/images/Header/HeaderSearchIcon.svg'
import { useHeaderSearchModel } from '@/features/Header/HeaderSearchBar/model/HeaderSearchModel'
import { useDebounce } from '@/shared/lib/utils/debounce'
import Link from 'next/link'


const HeaderSearchBar: FC = () => {
    const {
        searchText,
        isSearchFocus,
        searchedMangas,
        clearSearch,
        setSearchText,
        setIsSearchFocus,
        asyncSearchMango
    } = useHeaderSearchModel()

    const searchValue = useDebounce(searchText, 500)

    const searchFocusOn = () => setIsSearchFocus(true)
    const searchFocusOff = () => setIsSearchFocus(false)

    const changeSearchText: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        searchValue.length && asyncSearchMango(searchValue)
    }, [searchValue])

    return (
        <div className={classes.headerSearchBar}>
            <div
                className={classes.searchBox}
                onFocus={searchFocusOn}
                onBlur={searchFocusOff}
            >
                <Image
                    src={searchImage}
                    alt={'searchImage'}
                    className={classes.searchImage}
                    style={{opacity: Number(!isSearchFocus)}}
                />
                <input
                    value={searchText}
                    onChange={changeSearchText}
                    type="text"
                    placeholder={'Поиск по названию'}
                    style={{left: isSearchFocus ? '16px' : '40px'}}
                />
            </div>
            {searchedMangas.length > 0 && (
                <ul className={classes.searchList}>
                    <p className={classes.searchList__count}>
                        Найдено: {searchedMangas.length}
                    </p>
                    {searchedMangas?.map(item =>
                        <li key={item.id} onClick={clearSearch}>
                            <Link href={`/manga/${item?.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default HeaderSearchBar