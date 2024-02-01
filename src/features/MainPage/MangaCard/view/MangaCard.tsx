'use client'
import { FC } from 'react'
import { IManga } from '@/widgets/MainPageWidget/types/MainPageTypes'
import Link from 'next/link'
import Image from 'next/image'
import classes from './MangaCard.module.sass'

interface Props {
    manga: IManga
}

const MangaCard: FC<Props> = props => {
    const { manga } = props

    return (
        <div className={classes.mangaCard}>
            <div className={classes.Link}>
                <Link href={`/manga/${manga?.id}`}>
                    <Image
                        src={`${manga?.image}`}
                        alt={`${manga?.title}`}
                        width={190}
                        height={220}
                        className={classes.mangaImage}
                    />
                </Link>
            </div>
            <div className={classes.mangaInfo}>
                <p>Год: {manga?.release_year}</p>
                <h5>{manga?.title}</h5>
            </div>
        </div>
    )
}

export default MangaCard