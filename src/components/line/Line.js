import React from 'react';

import Card from '../card/connected';
import './Line.css';

const containerStyle = {
    flex: '1 1 auto',
    borderColor: 'rgba(34, 36, 38, 0.15)',
    boxShadow: '0px 2px 25px 0 rgba(34, 36, 38, 0.05) inset',
    background: '#F9FAFB',
    overflowY: 'scroll',
    margin: '0.5rem 0 0 0',
};

const headerStyle = {
  paddingLeft: '0.5rem',
  flex: '1 0 auto',
  margin: 0,
  maxHeight: '2rem',
};

const lineStyle =  {
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
};

const Line = ({ name, cards, children }) => {
  return (
    <div style={ lineStyle }>
      <h3 className="ui header" style={headerStyle}>
        { name }
      </h3>
      <div className="ui segment line" style={containerStyle}>
        { children }
      </div>
    </div>
  );
};


export default Line;
