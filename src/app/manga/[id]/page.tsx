import { FC } from 'react'
import MangaPageWidget from '@/widgets/MangaPageWidget/view/MangaPageWidget'
import MultiContainer from '@/shared/ui/MultiContainer/MultiContainer'

interface Props {
    params: {
        id: string,
    }
}

const MangaPage: FC<Props> = (props) => {
    const { params } = props

    return (
        <MultiContainer>
            <MangaPageWidget
                id={params.id}
            />
        </MultiContainer>
    )
}

export default MangaPage