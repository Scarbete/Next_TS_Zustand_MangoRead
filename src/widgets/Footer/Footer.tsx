import { FC } from 'react'
import MultiContainer from '@/shared/ui/MultiContainer/MultiContainer'
import FooterLogo from '@/features/Footer/FooterLogo/view/FooterLogo'
import FooterSocials from '@/features/Footer/FooterSocials/view/FooterSocials'
import FooterMap from '@/features/Footer/FooterMap/view/FooterMap'
import FooterBottom from '@/features/Footer/FooterBottom/view/FooterBottom'
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