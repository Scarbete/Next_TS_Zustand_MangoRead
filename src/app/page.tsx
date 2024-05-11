import { FC } from 'react'
import { MultiContainer } from '@/shared/ui/MultiContainer'
import { MainPageWidget } from '@/widgets/MainPageWidget'


const MainPage: FC = () => {

    return (
        <MultiContainer>
            <MainPageWidget />
        </MultiContainer>
    )
}

export default MainPage