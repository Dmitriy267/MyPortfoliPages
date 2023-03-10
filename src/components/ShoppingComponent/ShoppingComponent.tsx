import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {CardShop} from '../common/CardShop/CardShop'
import styles from './ShoppingComponent.module.scss';
import { Link } from 'react-router-dom';
import CartBox from '../../images/icons/shopping-bag_icon.svg'
import { useAppSelector } from '../../redux/hooks/hooks';
const ShoppingComponent=()=>{
    const {cartShop}=useAppSelector(state=>state.cart)
    return (
        <>
        <Header/>
<section className={styles.wrapper__section}>
    <h1>Приятных покупок</h1>
    <div className={styles.cartBox__div}>
    <Link to='/Корзина'><img src={CartBox} alt='Корзина'/>Перейти в корзину</Link>
    <p>Bыбранных товаров <span>{cartShop.length}</span></p>
    </div>
    <CardShop />
</section>
<Footer/>
</>
    )
}
export default ShoppingComponent;