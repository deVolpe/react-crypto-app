import React from 'react';
import classnames from 'classnames/bind';

import SelectForm from '../../containers/SelectFormContainer';
import Label from '../Label';
import MenuSVG from '../MenuSVG';

import styles from './DropMenu.scss';

const cx = classnames.bind(styles);

const DropMenu = () => {
  const pressed = () => {
    document.getElementById('drop-menu').classList.toggle(styles.hide);
  };

  return (
    <>
      <div className={styles.menuIcon} onClick={pressed}>
        <MenuSVG />
      </div>
      <div className={cx(styles.menu, styles.hide)} id="drop-menu">
        <Label />
        <SelectForm />
      </div>
    </>
  );
};

export default DropMenu;
