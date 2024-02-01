import RootTemplateLayout from '../application/layout/RootLayout'
import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

import '@/application/styles/nullStyles.sass'
import '@/application/styles/_variables.sass'

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

interface RootLayoutState {
    children: ReactNode
}


const RootLayout: FC<RootLayoutState> = props => {
    const { children } = props

    return (
        <RootTemplateLayout>
            {children}
        </RootTemplateLayout>
    )
}

export default RootLayout