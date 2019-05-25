import React from 'react';
import $ from 'jquery';
import SelectForm from '../../containers/SelectFormContainer';
import Label from '../Label';

import MenuSVG from '../MenuSVG';

import styles from './DropMenu.scss';

const DropMenu = () => (
    <>
      <div className={styles.menuIcon}>
        <MenuSVG />
      </div>
      <div className={styles.menu} id="drop-menu">
        <Label />
        <SelectForm />
      </div>
    </>
);

export default DropMenu;
