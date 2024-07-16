import React, { useState, useEffect } from 'react';
import { FilterStates } from '../../../config/sort';
import styles from './sortSearch.module.scss';

type SortProps = {
    placeholder: string;
    reset: string;
    onTextChange: (search: string) => void;
}
  
const SortSearch: React.FC<SortProps> = (
    { placeholder = 'Search...', 
      reset,
      onTextChange}) => {
    const [text, setText] = useState(''); 

    useEffect(() => {
        if (reset === FilterStates.RESET) {
            setText('');
        }
    }, [reset]);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const s = e.target.value;
        setText(s);
        onTextChange(s.length > 0 ? s : '');
    }

    return ( 
        <div className={styles.container}>
            <input
                type="text"
                name="search" 
                placeholder={placeholder}
                value={text} 
                onChange={(e)=>handleTextChange(e)}
            />
        </div>
    );
}
  
export default SortSearch;
