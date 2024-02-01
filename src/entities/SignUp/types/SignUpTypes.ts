import { IFullUserData } from "@/shared/types/types"
import { FormEvent } from "react"

export interface ISignUpModel {
    userData: {
        username: string
        nickname: string
        password: string
        image: File | null
    }
    successSignUp: boolean
    userImage: string
    setSuccessSignUp: (bool: boolean) => void
    errors: {
        username: boolean
        password: boolean
        image: boolean
    }
    setUserData: (data: Partial<ISignUpModel['userData']>) => void
    setUserImage: (file: File) => void
    validateForm: () => boolean
    textForAlertToast: () => string
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
    asyncSignUp: (userData: IFullUserData) => void
}