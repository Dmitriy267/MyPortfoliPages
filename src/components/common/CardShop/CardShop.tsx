import React, {FC} from "react";
import styles from './CardShop.module.scss';
import {TableCard} from '../../TableCard/TableCard';
import img1 from '../../../images/snickers/1.jpeg';
import img2 from '../../../images/snickers/2.jpeg';
import img3 from '../../../images/snickers/3.jpg';
import img4 from '../../../images/snickers/4.jpg';
import img5 from '../../../images/snickers/5.jpg';
import img6 from '../../../images/snickers/6.jpg';
import { useAppDispatch } from "../../../redux/hooks/hooks";
import {addProduct} from '../../../redux/features/Cart/cartSlice';

const data=[{
    id:1,
    title: 'Nike MD Runner',
    descript1:'Мужские кроссовки Nike MD Runner 2 с воздухопроницаемым сетчатым верхом и замшевыми накладками, выполненные в стиле легендарной модели для бега 90-х.',
    descript2:'',
    image:`${img1}`,
    alt:'Фото обуви',
    price:6890,
    quantity:0
},
{
    id:2,
    title: 'Nike Air Zoom Pegasus',
    descript1:'Nike Air Zoom Pegasus 39 с интуитивно понятным дизайном выводит вас на новый уровень, будь то тренировка или бег трусцой...',
    descript2:'',
    image:`${img2}`,
    alt:'Фото обуви',
    price:9116,
    quantity:0
},
{
    id:3,
    title: 'Nike Air Max Excee',
    descript1:'Мужские кроссовки с дышащим сетчатым верхом с накладками из искусственной кожи.',
    descript2:'Амортизирующая вставка Max Air в промежуточной подошве.',
    image:`${img3}`,
    alt:'Фото обуви',
    price:10070,
    quantity:0
},
{
    id:4,
    title: 'Nike Air Pegasus 83',
    descript1:'Мужские кроссовки с текстильным верхом с накладками из замши с удобной амортизирующей вставкой Air в промежуточной подошве.',
    descript2:'',
    image:`${img4}`,
    alt:'Фото обуви',
    price:6300,
    quantity:0 
},
{
    id:5,
    title: 'Nike Air Presto',
    descript1:'Мужские кроссовки с текстильным верхом с цельным неопреновым верхом с пластиковыми накладками в области шнуровки и пяток.',
    descript2:'',
    image:`${img5}`,
    alt:'Фото обуви',
    price:13400,
    quantity:0 
},
{
    id:6,
    title: 'Nike React Pegasus Trail',
    descript1:'Мужские беговые кроссовки с дышащим сетчатым верхом, удобная шнуровка с технологией Flywire для надежной фиксации стопы.',
    descript2:'',
    image:`${img6}`,
    alt:'Фото обуви',
    price:15770,
    quantity:0 
}
]
const CardShop:FC=()=>{
    const dispath=useAppDispatch();

    return(
        <TableCard>
    {data&&data.map((el, id)=>{
        return(
                <div className={styles.wrapper__div} key={id}>
                      <div className={styles.block__div}>
                    <div className={styles.up__div}>
                        <h3>{el.title}</h3>
                        <img src={el.image} alt={el.alt}/>
                        <p>{el.descript1}</p>
                        <p>{el.descript2}</p>
                    </div>
                    <div className={styles.down__div}>
                        <button className={styles.button} onClick={()=>dispath(addProduct(el))}>Добавить в корзину</button>
                        <p className={styles.quantity__p}>{el.quantity}</p>
                        <p>{el.price} руб.</p>
                    </div>
                </div>
                </div>
        )
                
    })}
            
            </TableCard>
            )
        }
        

export  {CardShop};