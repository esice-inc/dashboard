import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Dashboard from '../../components/dashboard/connected';
import Header from '../../components/header/connected';
import Line from '../../components/line/Line';
import RequirementCard from '../../components/card/RequirementCard';
import WorkOrderCard from '../../components/card/WorkOrderCard';
import DeliveryCard from '../../components/card/DeliveryCard';
import { loadRequirements, loadWorkOrders, loadDeliveries } from './actions';
import store from '../../store';
import './OrdersDashboard.css'

const RequirementsLine = ({}) => {
  console.log('render');
  const cards = useSelector(store => store.orders.requirements, shallowEqual);
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      setTimeout(() => loadRequirements({ dispatch }), 1000);
    }
  );
  console.log('CARDS ->', cards);

  return (
    <Line name={'Requerimientos'}>
      {
        Object.values(cards)
          .map((card) => (
            <RequirementCard
              key={JSON.stringify(card)}
              {...card}
            />
          ))
      }
    </Line>
  );
};

const WorkOrdersLine = ({}) => {
  const cards = useSelector(store => store.orders.workOrders, shallowEqual);
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      setTimeout(() => loadWorkOrders({ dispatch }), 1000);
    }
  );

  return (
    <Line name={'En producción'}>
      {
        Object.values(cards)
          .map((card) => (
            <WorkOrderCard
              key={JSON.stringify(card)}
              {...card}
            />
          ))
      }
    </Line>
  );
};

const DeliveriesLine = ({}) => {
  const cards = useSelector(store => store.orders.deliveries, shallowEqual);
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      setTimeout(() => loadDeliveries({ dispatch }), 1000);
    }
  );

  return (
    <Line name={'Entregas'}>
      {
        Object.values(cards)
          .map((card) => (
            <DeliveryCard
              key={JSON.stringify(card)}
              {...card}
            />
          ))
      }
    </Line>
  );
};

const OrdersDashboard = ({}) => {
  return (
    <>
      <Header />
      <div
        className="ui clearing divider"
        style={{boderTop: 'rgba(208, 212, 216, 0.15)'}}
      >
      </div>
      <Dashboard>
        <RequirementsLine />
        <WorkOrdersLine />
        <DeliveriesLine />
      </Dashboard>
    </>
  );
}

export default OrdersDashboard;
