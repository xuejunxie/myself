import React from 'react';
import './Card.scss';
const Card = ({ title, image, testId }) => (
  <article className="card" data-test={testId}>
    <img src={image} alt="" />
    <div className="meta">
      <header>{title}</header>
    </div>
  </article>
);
export default Card;
