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

const RequirementsLine = ({ selectedCard, setSelectedCard }) => {
  console.log('render');
  const cards = useSelector(store => store.sales.orders.requirements, shallowEqual);
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      setTimeout(() => loadRequirements({ dispatch }), 1000);
      // setTimeout(() => loadRequirements({ dispatch }), 3000);
    }
  );
  console.log('CARDS ->', cards);

  return (
    <Line name={'Requerimientos'} onNew={() => { console.log(0) }}>
      {
        Object.values(cards)
          .map((card) => (
            <RequirementCard
              key={JSON.stringify(card)}
              isSelected={selectedCard.saleId === card.saleId}
              setSelectedCard={setSelectedCard}
              {...card}
            />
          ))
      }
    </Line>
  );
};

const WorkOrdersLine = ({ selectedCard, setSelectedCard }) => {
  const cards = useSelector(store => store.sales.orders.workOrders, shallowEqual);
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
              isSelected={selectedCard.saleId === card.saleId}
              setSelectedCard={setSelectedCard}
              {...card}
            />
          ))
      }
    </Line>
  );
};

const DeliveriesLine = ({ selectedCard, setSelectedCard }) => {
  const cards = useSelector(store => store.sales.orders.deliveries, shallowEqual);
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
              isSelected={selectedCard.saleId === card.saleId}
              setSelectedCard={setSelectedCard}
              {...card}
            />
          ))
      }
    </Line>
  );
};

const OrdersDashboard = () => {
  const [selectedCard, setSelectedCard] = React.useState({});
  const lineProps = { selectedCard, setSelectedCard };

  return (
    <>
      <Header/>
      <div
        className="ui clearing divider"
        style={{boderTop: 'rgba(208, 212, 216, 0.15)', margin: 0 }}
      >
      </div>
      <Dashboard>
        <RequirementsLine {...lineProps} />
        <WorkOrdersLine {...lineProps} />
        <DeliveriesLine {...lineProps} />
      </Dashboard>
    </>
  );
}

export default OrdersDashboard;
