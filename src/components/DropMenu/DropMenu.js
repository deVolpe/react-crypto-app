import React from 'react';
import classnames from 'classnames/bind';
import $ from 'jquery';

import SelectForm from '../../containers/SelectFormContainer';
import Label from '../Label';
import MenuSVG from '../MenuSVG';
import { ServiceContextConsumer } from '../App/ServiceContext';

import styles from './DropMenu.scss';

const cx = classnames.bind(styles);

const DropMenu = () => {
  const pressed = () => {
    $('#drop-menu').toggleClass(styles.hide);
  };

  return (
    <>
      <div className={styles.menuSection}>
        <div className={styles.menuIcon} onClick={pressed}>
          <MenuSVG />
        </div>
      </div>
      <div className={cx(styles.menu, styles.hide)} id="drop-menu">
        <Label />
        <ServiceContextConsumer>
          {service => <SelectForm service={service} />}
        </ServiceContextConsumer>
      </div>
    </>
  );
};

export default DropMenu;
