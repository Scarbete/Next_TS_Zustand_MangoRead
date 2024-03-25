'use client'
import { FC, useEffect, useState } from 'react'
import { asyncGetManga } from '@/widgets/MangaPageWidget'

import { AuthModal } from '@/entities/AuthModal'
import { CommentsModal } from '@/entities/CommentsModal'
import { MangoInfoBlock } from '@/features/MangaPage/MangoInfoBlock'
import { MangaSynopsis } from '@/features/MangaPage/MangaSynopsis'
import { MangaComments } from '@/features/MangaPage/MangaComments'

interface IMangaPageProps {
    id: string
}

const MangaPageWidget: FC<IMangaPageProps> = props => {
    const { id } = props
    const [ manga, setManga ] = useState(null)

    useEffect(() => {
        asyncGetManga(Number(id))
            .then(data => setManga(data))
    }, [])

    return (
        <div>
            <AuthModal />
            <CommentsModal mangaId={Number(id)} />
            <MangoInfoBlock manga={manga} />
            <MangaSynopsis manga={manga} />
            <MangaComments manga={manga} />
        </div>
    )
}

export default MangaPageWidget