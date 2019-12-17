import React from 'react';

const CardRow = ({ rightContent, rightIcon, leftContent, leftIcon, label }) => {
  return (
    <div className="extra content">
      <span className="right floated">
        { rightContent }
        <i className={ rightIcon }></i>
      </span>
      <span>
        <i className={ leftIcon }></i>
        { leftContent }
      </span>
    </div>
  );
};

export default CardRow;
