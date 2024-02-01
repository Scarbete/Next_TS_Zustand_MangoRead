import classes from './FooterBottom.module.sass'

const FooterBottom = () => {
    return (
        <div className={classes.footerBottom}>
            <p>©2022, All right reserved.</p>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies Settings</li>
            </ul>
        </div>
    )
}

export default FooterBottom