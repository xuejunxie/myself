import React from 'react';
import classNames from 'classnames';
import Icon from 'components/Icon/Icon';
import './Button.scss';
const Button = ({
  image,
  svg,
  icon,
  icons,
  iconClass = '',
  iconClasses = [],
  round,
  plain,
  purple,
  label,
  testId,
  ...nativeElemProps
}) => (
  <button
    type="button"
    data-test={testId}
    {...nativeElemProps}
    className={classNames('btn', nativeElemProps.className, {
      round,
      plain,
      purple
    })}
  >
    {image && <img src={image} alt="" />}

    {svg && svg}

    {icons &&
      icons.map((icon, index) => (
        <Icon key={icon + index} name={icon} className={iconClasses[index]} />
      ))}

    {icon && <Icon name={icon} className={iconClass} />}

    {label && <strong>{label}</strong>}
  </button>
);
export default Button;
