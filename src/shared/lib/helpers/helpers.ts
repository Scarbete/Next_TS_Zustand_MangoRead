
export const objectWithoutProperties = (obj: any, keys: string[]) => {
    const target: { [key: string]: any } = {}

    for (const i in obj) {
        if (keys.indexOf(i) >= 0) continue
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
        target[i] = obj[i]
    }

    return target
}



export const createForm = <T extends Record<string, any>>(obj: T): FormData => {
    const form = new FormData
    const newObj = Object.entries(obj)

    newObj.forEach(([ key, value ]) => {
        form.append(`${key}`, value)
    })

    return form
}