import { ToastContainer } from 'react-toastify'
import { FC, ReactNode } from 'react'

import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

interface Props {
    children: ReactNode
}

const RootTemplateLayout: FC<Props> = props => {
    const { children } = props

    return (
        <html lang={'en'}>
            <body>
                <div id={'portal'} style={{ zIndex: '2', position: 'relative' }}>
                    <ToastContainer/>
                </div>
                <div style={{ zIndex: '1', position: 'relative' }}>
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