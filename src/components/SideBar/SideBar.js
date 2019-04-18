import React from 'react';
import SelectForm from '../SelectForm';
import Label from '../Label';

const SideBar = () => {
  return (
    <aside className="side-bar">
      <div className="container">
        <Label/>
        <SelectForm />
      </div>
    </aside>
  );
};

export default SideBar;