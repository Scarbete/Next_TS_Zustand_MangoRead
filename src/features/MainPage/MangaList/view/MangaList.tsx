import { FC } from 'react'
import { IManga } from '@/widgets/MainPageWidget'
import MangaCard from '@/features/MainPage/MangaCard/view/MangaCard'
import classes from './MangaList.module.sass'

interface Props {
    mangas: IManga[]
}

const MangaList: FC<Props> = props => {
    const { mangas } = props

    return (
        <div className={classes.mangasList}>
            {mangas?.map(item =>
                <MangaCard
                    key={item.id}
                    manga={item}
                />
            )}
        </div>
    )
}

export default MangaList