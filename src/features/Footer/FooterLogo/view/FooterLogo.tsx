import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import footerLogo from '@/shared/assets/images/Footer/FooterLogo.svg'
import classes from './FooterLogo.module.sass'


const FooterLogo: FC = () => {
    return (
        <Link href={'/'} className={classes.footerLogo}>
            <Image
                src={footerLogo}
                alt={'footerLogo'}
                className={classes.footerLogo__image}
            />
            <div className={classes.footerLogo__titleBox}>
                <h3>MangoRead</h3>
                <p>Читай мангу с нами</p>
            </div>
        </Link>
    )
}

export default FooterLogo