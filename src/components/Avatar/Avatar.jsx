import React from 'react';
import './Avatar.scss';
export const sizeMap = {
  sm: 45,
  md: 100,
  lg: 150
};
const Avatar = ({ src, size = 'md' }) => (
  <img src={src} className="avatar" alt="" width={sizeMap[size]} />
);
export default Avatar;
