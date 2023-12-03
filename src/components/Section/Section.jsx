import React from 'react';
import classNames from 'classnames';
import './Section.scss';
const Section = ({ header, transparent, children, ...nativeElemProps }) => (
  <section
    {...nativeElemProps}
    className={classNames('section', nativeElemProps.className)}
  >
    <header>{header}</header>
    <div
      className={classNames('inner-content', {
        transparent
      })}
    >
      {children}
    </div>
  </section>
);
export default Section;
