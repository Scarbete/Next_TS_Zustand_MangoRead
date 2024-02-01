

export const generateAlertErrorText = (message: string | undefined | null): string => {
    if (message === 'Invalid username or password') {
        return 'Неверное имя пользователя или пароль!'
    }
    else if (message === 'Пользователь with this username already exists.') {
        return 'Пользователь с таким именем уже существует.'
    }
    else return ''
}