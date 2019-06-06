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
  minWidth: '1200px',
};

const columnStyle = {
  height: '100%',
};

const Dashboard = (props) => (
  <div style={ gridContainerStyle }>
    <div className='ui centered grid' style={ gridStyle }>
      {
        props.lines.map(line => (
          <div className='four wide column' style={ columnStyle }>
            <Line {...line} />
          </div>
        ))
      }
    </div>
  </div>
);

export default Dashboard;
