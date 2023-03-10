import React, {FC} from "react";
import styles from './FormRegistration.module.scss';
import {Button} from  '../common/Button/Button';
import {GroupDiv} from  '../common/GroupDiv/GroupDiv';
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {addUser} from '../../redux/features/User/userSlice';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
interface IFormInput {
    Login: string;
    password: string;
    confirmPassword:string;
    mail:string;
  }
  const schema = yup.object({
    Login:yup.string().required().min(8),
    password: yup.string().required().min(6,''),
    confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Пароли не совпадают'),
mail:yup.string().required().email()
  }).required();
const FormRegistration:FC=()=>{
    const { register, formState:{errors}, handleSubmit } = useForm<IFormInput>({resolver: yupResolver(schema)});
    const dispatch=useAppDispatch();
    const {Login}=useAppSelector(state=>state.user)
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    const {Login}=data
    dispatch(addUser(Login))
  }
const navigate=useNavigate();
    const handeclick=()=>{
return navigate('/Примеры работ')
    }
    const handeClickExzample=()=>{
      return navigate('/Слайдер')
    }
    return(
      <>
      <Header/>
<section className={styles.registration__section}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__div}>
        <label>Логин</label>
        <input type='text' placeholder="Логин" {...register('Login', {required:true,  minLength:8 })}  style={{border:errors.Login&&`1px solid #EB5757`}}/>
        {errors.Login&&<p className={styles.errors1}>Логин должен содержать не менее 8 символов</p>}

        <label>Эл.почта</label>
        <input type='email' placeholder='Электронная почта'  className={styles.otherEmail__input} {...register('mail',{required:true, pattern:/^.+\@.+\..+$/})} 
      style={{border:errors.mail&&`1px solid #EB5757`}}/>
       {errors.mail&&<p className={styles.errors1}>Не правильно введен адрес эл.почты</p>}
       <label>Пароль</label>
        <input type='password' placeholder='Пароль' {...register('password',{required:true, minLength:6})} />
        {errors.password&&<p className={styles.errors1}>Пароль должен содержать не менее 6 символов</p>}
        <label>Повторите пароль</label>
        <input type='password' placeholder='Повторите пароль' {...register('confirmPassword',{required:true, minLength:6})} style={{border:errors.confirmPassword&&`1px solid #EB5757`}}/>
        {errors.confirmPassword&&<p className={styles.errors1}>Пароли не совпадают</p>}
        <input type='submit'/>
        </div>

    </form>
    <div className={styles.names__div}>
    <p>Добро пожаловать</p>
    <p>{Login}</p>
    </div>
      <GroupDiv>
    <Button onClick={handeclick}>Вернуться назад</Button>
    <Button onClick={handeClickExzample}>Следующий пример</Button>
    </GroupDiv>
</section>
<Footer/>
</>
    )
}
export default FormRegistration;