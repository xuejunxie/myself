import React from 'react';
import './SkeletonFrame.scss';
const SkeletonFrame = ({ count = 1 }) => (
  <>
    {new Array(count).fill(null).map((val, index) => (
      <article key={`frame-${index}`} className="skeleton-frame" />
    ))}
  </>
);
export default SkeletonFrame;
