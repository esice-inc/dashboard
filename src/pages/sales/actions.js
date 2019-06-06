// import API from '../../api';
import { actions } from './reducer'

export const loadSales = ({ dispatch, getState }) => {
  dispatch({ type: actions.START_LOAD });

  const quotations = [
    {
      title: 'Resorte Compresion 3/8"',
      customer: 'Procter & Gamble',
      description: 'Resorte de compresion 3/8" para soporte preliminar en hoja de aluminio. Se espera que soporte hasta 50kg encima. Color: Rojo',
      price: '578.96',
      quantity: '17',
      creationTime: '2 hours ago',
      deliveryTime: '15',
    },
    {
      title: 'O\'ring 16/8"',
      customer: 'Hella',
      description: 'Un simple O\'ring locochon',
      price: '43.50',
      quantity: '5',
      creationTime: '1 hours ago',
      deliveryTime: '13',
    },
  ];
  dispatch({ type: actions.SET_QUOTATIONS, quotations });

  const orders = [];
  dispatch({ type: actions.SET_ORDERS, orders });

  const deliveries = [];
  dispatch({ type: actions.SET_DELIVERIES, deliveries });

  dispatch({ type: actions.END_LOAD });
}
