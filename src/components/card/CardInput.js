import React from 'react';

const CardInput = ({ label, value }) => {
  return (
    <div className="extra content">
      <span className="right floated">
        { value }
      </span>
      <span>
        { label }
      </span>
    </div>
  );
};

export default CardInput;
