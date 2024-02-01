import { FormEvent } from 'react'

export interface ISignInUserData {
    username: string
    password: string
}

export interface IDecoded {
    exp: number
    iat: number
    jti: string
    token_type: string
    user_id: number
}

export interface ISignInModelState {
    userData: ISignInUserData
    checkBox: boolean
    successSignIn: boolean
    errors: {
        username: boolean
        password: boolean
    }
    toggleCheckBox: () => void
    validateForm: () => boolean
    setSuccessSignIn: (bool: boolean) => void
    setUserData: (data: Partial<ISignInModelState['userData']>) => void
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
    asyncSignIn: (userData: ISignInUserData) => void
    asyncGetProfile: (id: number) => void
}