import React from 'react';
import $ from 'jquery';

import SelectForm from '../../containers/SelectFormContainer';
import Label from '../Label';
import MenuSVG from '../MenuSVG';

import styles from './DropMenu.scss';

const DropMenu = () => {

  const isPressed = e => {
    $('#drop-menu').toggleClass(styles.hide);
  }

  return (
    <>
      <div className={styles.menuIcon} onClick={isPressed}>
        <MenuSVG />
      </div>
      <div className={styles.menu} id="drop-menu">
        <Label />
        <SelectForm />
      </div>
    </>
  );
};

export default DropMenu;
