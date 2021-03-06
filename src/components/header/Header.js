import React from 'react';

import './Header.css';


const gridContainerStyle = {
  flex: '1 0 auto',
  background: '#f9fafb',
};

const gridStyle = {
  margin: 0,
  minWidth: '900px',
};

const columnStyle = {
  // height: '100%',
};

const Header = () => (
  <div style={ gridContainerStyle }>
    <div className='ui centered grid' style={ gridStyle }>
      <div className='four wide column' style={ columnStyle }>
        <h1 className='ui floated left header' style={{ margin: 0, padding: '0.1em 1em 0.1em 0 ' }}>
          Ventas
        </h1>
        <span
          style={{
            padding: '0.8em',
            float: 'left',
            fontSize: '1em',
            height: '135%',
            background: 'white',
            borderTop: '1px solid rgba(208, 212, 216, 0.2)',
            borderLeft: '1px solid rgba(208, 212, 216, 0.2)',
            borderRight: '1px solid rgba(208, 212, 216, 0.2)',
          }}
        >
          Ordenes
        </span>
        <span style={{ padding: '0.8em', float: 'left', fontSize: '1em' }}>
          Pagos
        </span>
      </div>
      <div className='seven wide column' style={ columnStyle }>
        <div className="ui large icon input" style={{ width: '100%' }}>
          <input type="text" placeholder="Search..." />
          <i className="search icon"></i>
        </div>
      </div>
      <div className='one wide column'>
        <button
          className="ui button"
          onClick={() => window.location.href = process.env.REACT_APP_LOGOUT_URL }
          style={{
            margin: 0,
            padding: '1em 0',
            width: '100%',
            textAlign: 'center'
          }}
        >
          <i className="sign out alternate icon" style={{ margin: 0 }}></i>
        </button>
      </div>
    </div>
  </div>
);

export default Header;
