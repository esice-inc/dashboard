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
  margin: 0,
  // maxHeight: '2rem',
  display: 'inline-block',
};

const lineStyle =  {
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
};

const Line = ({ name, cards, onNew, children }) => {
  return (
    <div style={ lineStyle }>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3 className="ui header" style={headerStyle}>
          { name }
        </h3>
        {
          onNew && <button onClick={onNew} style={{ cursor: 'pointer' }}>
            +
          </button>
        }
      </div>
      <div className="ui segment line" style={containerStyle}>
        { children }
      </div>
    </div>
  );
};


export default Line;
