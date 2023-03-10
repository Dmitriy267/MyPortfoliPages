import React from "react";
import styles from './Header.module.scss';
import {Link} from 'react-router-dom'
const Header =()=>{
    return (
<header className={styles.header}>
    <nav className={styles.nav}>
        <ul>
            <li><Link to='/Главная'>Главная</Link></li>
            <li><Link to='/Примеры работ'>Примеры работ</Link></li>
        </ul>
    </nav>
</header>
    )
}
export default Header;