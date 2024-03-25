import { FC } from 'react'
import { IManga } from '@/widgets/MainPageWidget'
import classes from './MangaSynopsis.module.sass'

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