import { FC } from 'react'
import MultiContainer from '@/shared/ui/MultiContainer/MultiContainer'
import MainPageWidget from '@/widgets/MainPageWidget/view/MainPageWidget'

import { getAllGenre } from '@/widgets/MainPageWidget/model/MainPageModel'
import { GenresMainPage } from '@/widgets/MainPageWidget/types/MainPageTypes'


const MainPage: FC = async () => {
    const genres: GenresMainPage = await getAllGenre()

    return (
        <MultiContainer>
            <MainPageWidget genres={genres?.results ?? null}/>
        </MultiContainer>
    )
}

export default MainPage