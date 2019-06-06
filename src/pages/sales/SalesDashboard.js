import React from 'react';

import Dashboard from '../../components/dashboard/connected';
import Header from '../../components/header/connected';
import { loadSales } from './actions';
import store from '../../store';
import './SalesDashboard.css'

class SalesDashboard extends React.Component {
  constructor(props) {
    super(props)

    loadSales(store);
  }

  createQuotationCard({
    title, customer, description, price, pieces, quantity, creationTime, deliveryTime,
  }) {
    const rows = [
      {
        left: `${quantity} piezas`,
        right: `$ ${price} MXN`,
        label: ``,
      },
      {
        left: `${deliveryTime} días`,
        right: `${creationTime}`,
        label: ``,
      }
    ];

    return { title, customer, description, rows };
  }

  createOrderCard({
    title, customer, description, price, pieces, quantity, creationTime, deliveryTime,
  }) {
    const rows = [
      {
        left: `${quantity} piezas`,
        right: `$ ${price} MXN`,
        label: ``,
      },
      {
        left: `${deliveryTime} días`,
        right: `${creationTime}`,
        label: ``,
      }
    ];

    return { title, customer, description, rows };
  }

  createDeliveryCard({
    title, customer, description, price, pieces, quantity, creationTime, deliveryTime,
  }) {
    const rows = [
      {
        left: `${quantity} piezas`,
        right: `$ ${price} MXN`,
        label: ``,
      },
      {
        left: `${deliveryTime} días`,
        right: `${creationTime}`,
        label: ``,
      }
    ];

    return { title, customer, description, rows };
  }

  createLines({ quotations, orders, deliveries }) {
    return [
      {
        name: 'Cotizaciones',
        sales: quotations.map(this.createQuotationCard),
      },
      {
        name: 'Ordenes',
        sales: orders.map(this.createOrderCard),
      },
      {
        name: 'Deliveries',
        sales: deliveries.map(this.createDeliveryCard),
      },
    ];
  }

  render() {
    const { sales } = store.getState();

    return (
      <>
        <Header />
        <div className="ui clearing divider" style={{boderTop: 'rgba(208, 212, 216, 0.15)'}}></div>
        <Dashboard lines={this.createLines(sales)} />
      </>
    );
  }
}

export default SalesDashboard;
