import { FC } from 'react'
import MultiContainer from '@/shared/ui/MultiContainer/view/MultiContainer'
import { HeaderLogo } from '@/features/Header/HeaderLogo'
import { HeaderSearchBar } from '@/features/Header/HeaderSearchBar'
import { HeaderAuth } from '@/features/Header/HeaderAuth'
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