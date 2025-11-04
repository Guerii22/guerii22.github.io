import { Link, SvgIcon, Typography } from '@mui/material'

import styles from './Footer.module.css'

function JsonIcon() {
    return <SvgIcon sx={{ fill: (theme) => theme.palette.getContrastText(theme.palette.background.default) }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M190-360h70q17 0 28.5-11.5T300-400v-200h-60v190h-40v-50h-50v60q0 17 11.5 28.5T190-360Zm177 0h60q17 0 28.5-11.5T467-400v-60q0-17-11.5-28.5T427-500h-50v-50h40v20h50v-30q0-17-11.5-28.5T427-600h-60q-17 0-28.5 11.5T327-560v60q0 17 11.5 28.5T367-460h50v50h-40v-20h-50v30q0 17 11.5 28.5T367-360Zm176-60v-120h40v120h-40Zm-10 60h60q17 0 28.5-11.5T633-400v-160q0-17-11.5-28.5T593-600h-60q-17 0-28.5 11.5T493-560v160q0 17 11.5 28.5T533-360Zm127 0h50v-105l40 105h50v-240h-50v105l-40-105h-50v240ZM120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm0-80h720v-480H120v480Zm0 0v-480 480Z" /></svg>
    </SvgIcon>
}

const TextSx = {
    color: (theme) => theme.palette.getContrastText(theme.palette.background.default),
    fontFamily: 'sans-serif',
}

export function Footer() {
    return <div className={styles.container}>
        <Typography fontSize={12} sx={TextSx} className={styles.copyright}>© 2025 ISTITUTO ISTRUZIONE SUPERIORE "David Maria Turoldo" Zogno - BG</Typography>
        <div className={styles.made}>
            <Typography sx={TextSx}>Made with<JsonIcon />by&nbsp;</Typography>
            <Link sx={TextSx} href="mailto:gabriele.guerinoni@stu.istitutoturoldo.edu.it">Gueri</Link>
            <Typography sx={TextSx}>,&nbsp;</Typography>
            <Link sx={TextSx} href="mailto:nicola.regazzoni@stu.istitutoturoldo.edu.it">Regazz</Link>
            <Typography sx={TextSx}>,&nbsp;</Typography>
            <Link sx={TextSx} href="mailto:matteo.@cristini@stu.istitutoturoldo.edu.it">Cristo</Link>
            <Typography sx={TextSx}>,&nbsp;</Typography>
            <Link sx={TextSx} href="mailto:mattia.cortesi@stu.istitutoturoldo.edu.it">Tia</Link>
            <Typography sx={TextSx}>&nbsp;e&nbsp;</Typography>
            <Link sx={TextSx} href="mailto:mirko.vanotti@stu.istitutoturoldo.edu.it">Vano</Link>
        </div>
    </div>
}