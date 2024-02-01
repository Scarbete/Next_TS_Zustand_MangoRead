import { FC } from 'react'
import { IManga } from '@/widgets/MainPageWidget/types/MainPageTypes'

import classes from './MangoInfoBlock.module.sass'
import Image from 'next/image'

interface Props {
    manga: IManga | null
}

const MangoInfoBlock: FC<Props> = props => {
    const { manga } = props

    return (
        <div className={classes.mangoInfoBlock}>
            <div className={classes.mangaImage}>
                {manga?.image && (
                    <Image
                        src={manga?.image}
                        alt={'mangaImage'}
                        width={328}
                        height={328}
                    />
                )}
            </div>
            <div className={classes.mangaText}>
                <h2>{manga?.title ?? 'Название манги'}</h2>
                <ul>
                    <li>
                        <h3>Информация:</h3>
                    </li>
                    <li>
                        <p>Тип:<span>{manga?.tip?.name}</span></p>
                    </li>
                    <li>
                        <p>Год:<span>{manga?.release_year}</span></p>
                    </li>
                    <li>
                        <p>
                            Жанр:
                            {manga?.genre_list?.map((item, index, arr) =>
                                <span key={item}>
                                    {item}
                                    {index === arr.length - 1 ? "." : ", "}
                                </span>
                            )}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MangoInfoBlock