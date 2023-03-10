import React, {Children, cloneElement, FC, useEffect, useState} from "react";
import styles from './Carousel.module.scss';
import {CarouselProps} from '../../interface/CarouselProps';
import arrowLeft from '../../images/icons/arrow-left.svg';
import arrowRight from '../../images/icons/arrow-right.svg';
const PAGE_WIDTH:string='400px';
const Carousel:FC<CarouselProps>=({children})=>{
    const [pages, setPages] =useState([]);
    const [offset, setOffset]=useState<string|number>('0px');
    const stylesTransform={transform:`translateX(${offset}px)` };
    const handleArrowLeftClick=()=>{
        setOffset((currentOffSet:string|number)=>{
            const newOffset=parseInt(`${currentOffSet}`)+parseInt(`${PAGE_WIDTH}`);
            return Math.min(newOffset,0);
        
    })
}
const handleArrowRightClick=()=>{
    console.log('handleArrowRightClick');
    setOffset((currentOffSet:any)=>{
        const newOffset=parseInt(`${currentOffSet}`)-parseInt(`${PAGE_WIDTH}`);
        const maxOffset=-(parseInt(`${PAGE_WIDTH}`)*(pages.length-1));
        return Math.max(newOffset, maxOffset);
    
})
}
    useEffect(()=>{
        setPages(
            Children.map(children, (child)=>{
                return cloneElement(child, {
                    style:{
                        height:'100%',
                        minwidth:`${PAGE_WIDTH}`,
                        maxnwidth:`${PAGE_WIDTH}`,
                    },
                })
            })
        )
    }, [])
    return (
<div className={styles.main__div}>
<button className={styles.left__button} onClick={handleArrowLeftClick}><img src={arrowLeft} alt='Стрелка влево'/></button>
    <div className={styles.window__div}>
        <div className={styles.containerPages__div} style={stylesTransform}>
        {pages} 
        </div>
    </div>
    <button className={styles.right__button} onClick={handleArrowRightClick}><img src={arrowRight} alt='Стрелка вправо'/></button>
</div>
    )
}
export {Carousel}