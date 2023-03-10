import React, {FC} from 'react'
import styles from './Footer.module.scss';

const Footer: FC=()=>{
    return (
<footer className={styles.footer}>
    <div className={styles.block__div}>
    <p>Контакты:</p>
    <ul>
        <li><a href='mailto:dmitrio87@mail.ru'>Эл.почта: dmitrio87@mail</a></li>
        <li><a href='https://t.me/DmitriyV267'>Телеграм: t.me/DmitriyV267</a></li>
        <li><a href='tel:+79270119556'>Сот. тел.: 89270119556</a></li>
        </ul>
     </div>   

</footer>
    )
}

export default Footer;