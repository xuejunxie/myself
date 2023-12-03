import React from 'react';
import Button from 'components/Button/Button';
import './Pill.scss';
const Pill = ({ icons }) => (
  <div className="pill">
    {icons.map((icon) => (
      <Button key={icon} icon={icon} />
    ))}
  </div>
);
export default Pill;
