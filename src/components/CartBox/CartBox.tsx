import React, {FC} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './CartBox.module.scss';
import {Button} from  '../common/Button/Button';
import {GroupDiv} from  '../common/GroupDiv/GroupDiv';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {removeProduct} from '../../redux/features/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';
const CartBox:FC=()=>{
    const {cartShop, totalPrice}=useAppSelector(state=>state.cart);
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const handeclick=()=>{
        return navigate('/Выбор товара')
    }
    const handeClickExzample=()=>{
        return navigate('/Главная')
    }
  
    return(
        <>
        <Header/>
        <section className={styles.cartBox__section}>
            <h3>Ваша корзина</h3>
            <div className={styles.wrapper__div}>
                {cartShop.map((el, id)=>{
                    return(
                        <div className={styles.card} key={id}>
                             <div className={styles.block__div}>
                    <div className={styles.up__div}>
                        <img src={el.image} alt={el.alt}/>
                        <h3>{el.title}</h3>
                        <p>{el.descript1}</p>
                    </div>
                    <div className={styles.down__div}>
                    <p>{el.price} руб.</p>
                        <button className={styles.button} onClick={()=>dispatch(removeProduct(el))}>Удалить</button>
                    </div>
                </div>
                        </div>
        
                    )
                })}
            </div>
            <p className={styles.lost__p}>Итого: {totalPrice} рублей</p>
            <div className={styles.uyt__div}>
            <GroupDiv>
    <Button onClick={handeclick}>Вернуться назад</Button>
    <Button onClick={handeClickExzample}>На главную</Button>
    </GroupDiv>
     </div>
          
        </section>
        <Footer/>
        </>

    )
}
export default CartBox;