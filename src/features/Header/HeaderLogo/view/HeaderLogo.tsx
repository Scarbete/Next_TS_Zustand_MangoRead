import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

import classes from './HeaderLogo.module.sass'
import headerLogoImage from '@/shared/assets/images/Header/HeaderLogo.svg'


const HeaderLogo: FC = () => {
    return (
        <Link href={'/'} className={classes.headLogo}>
            <Image src={headerLogoImage} alt={'headerLogoImage'} />
            <div className={classes.titleBox}>
                <h3>MangoRead</h3>
                <p>Читай мангу с нами</p>
            </div>
        </Link>
    )
}

export default HeaderLogo