import React from 'react';
import SelectForm from '../../containers/SelectFormContainer';
import Label from '../Label';

import styles from './SideBar.scss';

const SideBar = () => {
  return (
    <aside className={styles.SideBar}>
      <div className={styles.container}>
        <Label/>
        <SelectForm />
      </div>
    </aside>
  );
};

export default SideBar;