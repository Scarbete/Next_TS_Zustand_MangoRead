
export function objectWithoutProperties(obj: any, keys: string[]) {
    const target: { [key: string]: any } = {}

    for (const i in obj) {
        if (keys.indexOf(i) >= 0) continue
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
        target[i] = obj[i]
    }

    return target
}