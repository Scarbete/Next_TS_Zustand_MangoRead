import classes from './MangaSynopsis.module.sass'
import { FC } from 'react'
import { IManga } from '@/widgets/MainPageWidget/types/MainPageTypes'

interface Props {
    manga: IManga | null
}

const MangaSynopsis: FC<Props> = props => {
    const { manga } = props

    return (
        <div className={classes.synopsis}>
            <h3>Синопсис</h3>
            <p>{manga?.description}</p>
        </div>
    )
}

export default MangaSynopsis