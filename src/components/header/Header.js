import React from 'react';

import './Header.css';


const gridContainerStyle = {
  flex: '1 0 auto',
  height: '80px',
};

const gridStyle = {
  margin: 0,
  height: '100%',
  minWidth: '1200px',
};

const columnStyle = {
  // height: '100%',
};

const Header = (props) => (
  <div style={ gridContainerStyle }>
    <div className='ui centered grid' style={ gridStyle }>
      <div className='four wide column' style={ columnStyle }>
        <h1 className='ui left huge header' style={{ fontSize: '4em' }}>Ventas</h1>
      </div>
      <div className='four wide column' style={ columnStyle }>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/elliot.jpg'/>
        </a>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/stevie.jpg'/>
        </a>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/helen.jpg'/>
        </a>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/daniel.jpg'/>
        </a>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/steve.jpg'/>
        </a>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/elliot.jpg'/>
        </a>
        <a className='ui circular label' style={{ padding: '0 !important' }}>
          <img className='ui avatar image' style={{ margin: 0}} src='/images/avatar/stevie.jpg'/>
        </a>
      </div>
      <div className='four wide column' style={ columnStyle }>
        <div className="ui large icon input" style={{ width: '100%' }}>
          <input type="text" placeholder="Search..." />
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
