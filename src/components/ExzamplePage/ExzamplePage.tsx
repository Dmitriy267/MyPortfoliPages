import React from 'react';
import styles from './ExzamplePage.module.scss';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function ExzamplePage (){
    return (
        <>
        <Header/>
        <section className={styles.exzample__section}>
            <h3>Вот некоторые работы, которые я реализовал:</h3>
           <ul>
            <li><Link to='/Регистрация'>Регистрация с валидацией формы</Link></li>
            <li><Link to='/Слайдер'>Слайдер изображений</Link></li>
            <li><Link to='/Выбор товара'>Выбор товара</Link></li>
           </ul>
        </section>
        <Footer/>
        </>
    )
}

export default ExzamplePage;