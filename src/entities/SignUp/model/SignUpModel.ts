import { ISignUpModel } from '@/entities/SignUp/types/SignUpTypes'
import { create } from 'zustand'

import { $mainApi } from '@/shared/lib/axios/requester'
import { alertToast } from '@/shared/ui/CustomAlert/CustomAlert'
import { CustomError } from '@/shared/types/types'
import { generateAlertErrorText } from '@/shared/lib/utils/alertErrorText'
import { createForm } from '@/shared/lib/helpers/helpers'


export const useSignUpModel = create<ISignUpModel>((set, get) => ({
    userData: {
        username: '',
        nickname: '',
        password: '',
        image: null,
    },
    userImage: '',
    successSignUp: false,
    errors: {
        username: false,
        password: false,
        image: false,
    },
    setSuccessSignUp: (bool) => {
        set({ successSignUp: bool })
    },
    setUserData: (data) => {
        set((state) => ({
            userData: { ...state.userData, ...data },
        }))
    },
    setUserImage: (file) => {
        const urlFile = URL.createObjectURL(file)
        set(( state ) => ({
            userImage: urlFile,
            userData: { ...state.userData, image: file }
        }))
    },
    validateForm: () => {
        const { userData, userImage } = get()
        const { username, password } = userData

        const newErrors = {
            username: Boolean(!username.trim() || username.trim().length < 6),
            password: Boolean(!password.trim() || password.trim().length < 6),
            image: Boolean(!userImage),
        }

        set({ errors: newErrors })
        return Object.values(newErrors).every((error) => !error)
    },
    textForAlertToast: () => {
        const { userData, userImage } = get()
        const { username, password } = userData

        if (!username.trim() || !password.trim()) {
            return 'Поля ввода пусты!'
        }
        else if (username.trim().length < 6 || password.trim().length < 6) {
            return 'значения должны быть от 6 символов!'
        }
        else if (!userImage) {
            return 'Добавьте изображение!'
        }
        return ''
    },
    handleSubmit: (event) => {
        event.preventDefault()
        const { validateForm, userData, textForAlertToast, asyncSignUp } = get()

        if (validateForm()) asyncSignUp(userData)
        else alertToast('error', textForAlertToast())
    },
    asyncSignUp: async (userData) => {
        try {
            const form = createForm(userData)
            const { status } = await $mainApi.post(`users/signup/`, form)

            if (status <= 204 && status >= 200) {
                set(() => ({
                    userData: {
                        username: '',
                        nickname: '',
                        password: '',
                        image: null,
                    },
                    userImage: '',
                    successSignUp: true
                }))
                alertToast('success', 'Вы успешно зарегистрировались!')
            }
        }
        catch (error: CustomError) {
            alertToast('error', generateAlertErrorText(error?.response?.data?.username?.[0]))
            return null
        }
    }
}))