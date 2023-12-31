import React from 'react';
import Icon from 'components/Icon/Icon';
import './Error.scss';
const Error = ({ message = "Oops couldn't load content" }) => (
  <div className="error">
    <p>
      <Icon name="faExclamationCircle" /> {message}
    </p>
  </div>
);
export default Error;
