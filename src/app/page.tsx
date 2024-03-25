import { FC } from 'react'
import { MultiContainer } from '@/shared/ui/MultiContainer'

import {
    GenresMainPage,
    MainPageWidget,
    getAllGenre
} from '@/widgets/MainPageWidget'


const MainPage: FC = async () => {
    const genres: GenresMainPage = await getAllGenre()

    return (
        <MultiContainer>
            <MainPageWidget genres={genres?.results ?? null}/>
        </MultiContainer>
    )
}

export default MainPage