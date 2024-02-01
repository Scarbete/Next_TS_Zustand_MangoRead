import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastOptions: ToastOptions = {
    autoClose: 2000,
    position: 'top-right',
}

export const alertToast = (type: 'info' | 'success' | 'error', message: string) => {
    const notify = () => toast[ type ](message, toastOptions)
    notify()
}
