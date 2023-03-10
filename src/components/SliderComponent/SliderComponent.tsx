import React from "react";
import { useNavigate } from "react-router-dom";
import {Carousel} from '../Carousel/Carousel';
import {Button} from  '../common/Button/Button';
import {GroupDiv} from  '../common/GroupDiv/GroupDiv';
import styles from './SliderComponent.module.scss';
import img1 from '../../images/Auto/1.png';
import img2 from '../../images/Auto/2.png';
import img3 from '../../images/Auto/3.png';
import img4 from '../../images/Auto/4.png';
import img5 from '../../images/Auto/5.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function SliderComponent () {
    const navigate=useNavigate();
    const handeclick=()=>{
return navigate('/Регистрация')
    }
    const handeClickExzample=()=>{
      return navigate('/Выбор товара')
    }
return ( 
    <>
    <Header/>
    <section className={styles.wrapper__section}>
<Carousel>
    <div className={styles.item__div}><img src={img1} alt='Изображение авто'/></div>
    <div className={styles.item__div}><img src={img2} alt='Изображение авто'/></div>
    <div className={styles.item__div}><img src={img3} alt='Изображение авто'/></div>
    <div className={styles.item__div}><img src={img4} alt='Изображение авто'/></div>
    <div className={styles.item__div}><img src={img5} alt='Изображение авто'/></div>
</Carousel>
<GroupDiv>
    <Button onClick={handeclick}>Вернуться назад</Button>
    <Button onClick={handeClickExzample}>Следующий пример</Button>
    </GroupDiv>
    </section>
<Footer/>
</>
)
}

export default SliderComponent;