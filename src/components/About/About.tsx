import React, {FC} from "react";
import styles from './About.module.scss';
import {Link} from 'react-router-dom';

const About:FC=()=>{
    return (
<section className={styles.about__section}>
    <h1>Моя автобиография</h1>
    <h3>Bceм привет. Меня зовут Дмитрий, я начинающий фронтенд разработчик</h3>
    <div className={styles.common__div}>
    <p>Расскажу немного о себе:</p>
    <p className={styles.text2__p}>Фронтенд разработкой я начал увлекаться примерно в 2017 году, поначалу изучал HTML и CSS, скачивал бесплатные шаблоны сайтов и открывал их в фотошопе. Делал верстку страниц. Мне нравилось видеть результат моей работы.
        Но для меня этого было не достаточно. Я решил изучить язык программирования Javascript, затем была библиотека JQuery. Больше всего понравилось создавать анимацию. Чтобы развить в себе дополнительные навыки, в 2021 году закончил курс онлайн школы <span>"Skillfactory"</span> по специальности 
        <span>"Fullstack разработчик на JavaScript"</span>. Этот курс был выбран мной потому, что в нем была программа обучения не только по фронтенд части, но и бэкенд.
    </p>
    <p className={styles.text3__p}>В феврале 2023 года я прошел стажировку в  компании <span>"Hawking School"</span> по специальности <span>"Frontend разработчик"</span> и получил положительный отзыв.</p>
   <p>Перейдя по вкладке <Link to='/Примеры работ'>"Примеры работ"</Link> вы увидите некоторые мои работы.</p>
    </div>

 
</section>
    )
}
export default About;