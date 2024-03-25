import { FC } from 'react'
import MultiContainer from '@/shared/ui/MultiContainer/view/MultiContainer'
import { FooterLogo } from '@/features/Footer/FooterLogo'
import { FooterSocials } from '@/features/Footer/FooterSocials'
import { FooterMap } from '@/features/Footer/FooterMap'
import { FooterBottom } from '@/features/Footer/FooterBottom'
import classes from './Footer.module.sass'


const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <MultiContainer className={classes.container}>
                <FooterLogo/>
                <FooterSocials/>
                <FooterMap/>
            </MultiContainer>
            <div className={classes.bottomBox}>
                <FooterBottom/>
            </div>
        </footer>
    )
}

export default Footer