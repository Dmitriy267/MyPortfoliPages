import React, {FC} from "react";
import styles from './GroupDiv.module.scss';
import {GroupDivProps} from '../../../interface/GroupDivProps';
const GroupDiv:FC<GroupDivProps>=({children})=>{
    return (
        <div className={styles.wrapper__div}>
            {children}
        </div>
    )
}
export {GroupDiv};