'use client'
import { FC } from 'react'

import Image from 'next/image'
import { useFooterSocials } from '@/features/Footer/FooterSocials'

import classes from './FooterSocials.module.sass'


const FooterSocials: FC = () => {
    const { socials } = useFooterSocials()

    return (
        <ul className={classes.socialList}>
            {socials?.map((item, index) =>
                <li key={index}>
                    <a href={item.url} target={'_blank'}>
                        <Image src={item.image} alt={'socialImage'} />
                        <p>{item.label}</p>
                    </a>
                </li>
            )}
        </ul>
    )
}

export default FooterSocials