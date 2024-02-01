import { FC } from 'react'
import HeaderLogo from '@/features/Header/HeaderLogo/view/HeaderLogo'
import HeaderSearchBar from '@/features/Header/HeaderSearchBar/view/HeaderSearchBar'
import HeaderAuth from '@/features/Header/HeaderAuth/view/HeaderAuth'
import MultiContainer from '@/shared/ui/MultiContainer/MultiContainer'

import classes from './Header.module.sass'


const Header: FC = () => {

    return (
        <header className={classes.header}>
            <MultiContainer className={classes.container}>
                <HeaderLogo/>
                <HeaderSearchBar/>
                <HeaderAuth/>
            </MultiContainer>
        </header>
    )
}

export default Header