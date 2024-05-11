import { FC } from 'react'
import MangaCard from '@/features/MainPage/MangaCard/view/MangaCard'
import { useMainPageModel } from '@/widgets/MainPageWidget'
import classes from './MangaList.module.sass'


const MangaList: FC = () => {
    const { mangasResponse } = useMainPageModel()

    return (
        <div className={classes.mangasList}>
            {mangasResponse?.map(item =>
                <MangaCard
                    key={item.id}
                    manga={item}
                />
            )}
        </div>
    )
}

export default MangaList