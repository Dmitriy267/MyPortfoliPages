import React, {FC} from "react";
import styles from './TableCard.module.scss';
import {TableCardProps} from '../../interface/TableCardProps'
const TableCard:FC<TableCardProps>=({children})=><div className={styles.wrapper__div}>{children}</div>
export {TableCard};