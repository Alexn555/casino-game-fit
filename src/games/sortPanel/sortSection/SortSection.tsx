import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { SelectorsType } from '../../../config/selectors';
import { FilterStates } from '../../../config/sort';
import styles from './sortSection.module.scss';

type SortProps = {
  title: string;
  items: any[];
  isMultiple: boolean;
  reset?: string;
  onItemChange: (items: SelectorsType[]) => void;
}
  
const SortSection: React.FC<SortProps> = (
  { items, 
    title, 
    isMultiple,
    reset = '',
    onItemChange}) => {
  const selectors: SelectorsType[] = items.map((item) => {
    return { value: item.id, label: item.name }
  });
  const [curVal, setCurVal] = useState<SelectorsType[]>([]);

  const setDefaultValue = () => {
    return isMultiple ? selectors : [selectors[0]];
  }
  let defValue = setDefaultValue();

  useEffect(() => {
    setCurVal(defValue);
  }, []);

  useEffect(() => {
    if (reset === FilterStates.RESET) {
      defValue = setDefaultValue();
      setCurVal(defValue);
    }
  }, [reset]);

  const selectStyles: StylesConfig = {
      control: (base) => {
        return { ...base, borderStyle: 'none' };
      },
      multiValue: (base) => {
        return { ...base, backgroundColor: 'white', color: 'gray' };
      },
      multiValueLabel: (base) => {
        return { ...base, fontWeight: 'normal', fontSize: '16', color: 'black', paddingRight: 6 }
      },
  };

  const handleChange = (
      value: any
    ) => {
      setCurVal(value);
      onItemChange(value);
  }

  return ( 
      <div className={styles.filterContainer}>
          <span>{title}</span>
          <Select
              closeMenuOnSelect={false}
              defaultValue={defValue}
              value={curVal}
              styles={selectStyles}
              isMulti={isMultiple}
              onChange={handleChange}
              options={selectors}
              isClearable={true}
          />
      </div>
  );
}
  
export default SortSection;
