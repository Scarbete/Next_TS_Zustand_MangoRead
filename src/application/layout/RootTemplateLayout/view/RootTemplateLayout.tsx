import { ToastContainer } from 'react-toastify'
import { FC, ReactNode } from 'react'

import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

import classes from './RootTemplateLayout.module.scss'

interface Props {
    children: ReactNode
}

const RootTemplateLayout: FC<Props> = props => {
    const { children } = props

    return (
        <html lang={'en'}>
            <body>
                <div id={'portal'}>
                    <ToastContainer/>
                </div>
                <div className={classes.root}>
                    <Header/>
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}

export default RootTemplateLayout