import Cookies from 'js-cookie'
import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'

import { $authApi, $mainApi } from '@/shared/lib/axios/requester'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/shared/lib/variables/variables'
import { alertToast } from '@/shared/ui/CustomAlert/CustomAlert'
import { CustomError } from '@/shared/types/types'
import { generateAlertErrorText } from '@/shared/lib/utils/alertErrorText'
import { IDecoded, ISignInModelState } from '@/entities/SignIn'


export const useSignInModel = create<ISignInModelState>((set, get) => ({
    userData: {
        username: '',
        password: ''
    },
    errors: {
        username: false,
        password: false,
    },
    checkBox: false,
    successSignIn: false,
    setUserData: (data) => {
        set((state) => ({
            userData: { ...state.userData, ...data },
        }))
    },
    toggleCheckBox: () => {
        set((state) => ({
            checkBox: !state.checkBox
        }))
    },
    setSuccessSignIn: (bool) => {
        set({ successSignIn: bool })
    },
    validateForm: () => {
        const { userData } = get()
        const newErrors = {
            username: Boolean(!userData.username.trim()),
            password: Boolean(!userData.password.trim()),
        }
        set({ errors: newErrors })
        return Object.values(newErrors).every((error) => !error)
    },
    handleSubmit: (event) => {
        event.preventDefault()
        const { validateForm, userData, asyncSignIn } = get()

        if (validateForm()) asyncSignIn(userData)
        else alertToast('error', 'Поля ввода пусты!')
    },
    asyncSignIn: async (userData) => {
        const { asyncGetProfile } = get()
        try {
            const { status, data } = await $mainApi.post(`users/login/`, userData)
            if (status <= 204 && status >= 200) {
                const { user_id }: IDecoded = jwtDecode(data.tokens.access)
                Cookies.set('user_id', user_id.toString())
                Cookies.set(ACCESS_TOKEN, data.tokens.access)
                Cookies.set(REFRESH_TOKEN, data.tokens.refresh)
                asyncGetProfile(Number(user_id))
            }
        }
        catch (error: CustomError) {
            alertToast('error', generateAlertErrorText(error?.response?.data?.message))
            return null
        }
    },
    asyncGetProfile: async (id) => {
        try {
            const { data, status } = await $authApi.get(`/users/profile/${id}/`)
            if (status <= 204 && status >= 200) {
                Cookies.set('userData', JSON.stringify(data))
                set(() => ({
                    userData: { username: '', password: '' },
                    successSignIn: true
                }))
                alertToast('success', 'Вы успешно зашли в аккаунт!')
            }
        }
        catch (error: CustomError) {
            alertToast('error', generateAlertErrorText(error?.response?.data?.message))
            return null
        }
    }
}))