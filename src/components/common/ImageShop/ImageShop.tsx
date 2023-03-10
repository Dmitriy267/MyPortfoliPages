import React, {FC} from "react";
import styles from './ImageShop.module.scss';
import {ImageShopProps} from '../../../interface/ImageShopProps';
const ImageShop:FC<ImageShopProps>=({src, alt})=><img src={src} alt={alt} className={styles.img}/>
export {ImageShop}