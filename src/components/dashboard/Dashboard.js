import React from 'react';

import Line from '../line/Line'

const gridContainerStyle = {
  flex: '1 1 auto',
  height: '100%',
  overflowX: 'scroll',
  minHeight: '500px',
};

const gridStyle = {
  margin: 0,
  height: '100%',
  minWidth: '900px',
};

const columnStyle = {
  height: '100%',
};

const Dashboard = ({ children }) => (
  <div style={ gridContainerStyle }>
    <div className='ui centered grid' style={ gridStyle }>
      {
        React.Children.map(children, (line) => (
          <div className='four wide column' style={ columnStyle }>
            { line }
          </div>
        ))
      }
    </div>
  </div>
);

export default Dashboard;
