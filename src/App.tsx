import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MainPage from  './components/MainPage/MainPage';
import ExzamplePage from './components/ExzamplePage/ExzamplePage';
import FormRegistration from './components/FormRegistration/FormRegistration';
import SliderComponent from './components/SliderComponent/SliderComponent';
import ShoppingComponent from './components/ShoppingComponent/ShoppingComponent';
import CartBox from './components/CartBox/CartBox';
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.App__div}>
   <Routes>
   <Route path='/' element={<MainPage/>}/>
    <Route path='Главная' element={<MainPage/>}/>
    <Route path='Примеры работ' element={<ExzamplePage/>}/>
    <Route path='Регистрация' element={<FormRegistration/>}/>
    <Route path='Слайдер' element={<SliderComponent/>}/>
    <Route path='Выбор товара' element={<ShoppingComponent/>}/>
    <Route path='Корзина' element={<CartBox/>}/>
   </Routes>
   </div>
  );
}

export default App;
