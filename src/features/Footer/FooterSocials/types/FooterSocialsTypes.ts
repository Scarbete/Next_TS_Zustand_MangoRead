
interface ISocialImage {
    blurHeight: number
    blurWidth: number
    height: number
    src: string
    width: number
}

interface IFooterSocialData {
    label: string
    image: ISocialImage
    url: string
}

export interface FooterSocialsTypes {
    socials: IFooterSocialData[]
}