import React from 'react';

const Thickness = ({ thickness }) => {
  return (
    <select className="menu-trigger">
      {{ thickness }.map(option => {
        return (
          <option className="option" key={option.id}>
            {option.value}
          </option>
        );
      })}
    </select>
  );
};

export default Thickness;
