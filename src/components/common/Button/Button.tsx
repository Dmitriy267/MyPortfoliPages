import React,{FC} from "react";
import styles from './Button.module.scss';
import {ButtonProps} from  '../../../interface/ButtonProps';

const Button:FC<ButtonProps>=({children, onClick})=>{
    return (
<button className={styles.button} onClick={onClick}>{children}</button>
    )
}
export {Button}