// import API from '../../api';
import { actions } from './reducer'

export const loadRequirements = ({ dispatch }) => {
  dispatch({ type: actions.START_REQUIREMENTS_LOAD });

  const requirements = [
    {
      id: '1',
      product: 'Resorte Compresion 3/8"',
      customer: 'Procter & Gamble',
      description: 'Resorte de compresion 3/8" para soporte preliminar en hoja de aluminio. Se espera que soporte hasta 50kg encima. Color: Rojo',
      unitPrice: '578.96',
      numberOfPieces: '17',
      creationTime: '2 hours ago',
      deliveryTime: '15',
    },
    {
      id: '2',
      product: 'O\'ring 16/8"',
      customer: 'Hella',
      description: 'Un simple O\'ring locochon',
      unitPrice: '43.50',
      numberOfPieces: '5',
      creationTime: '1 hours ago',
      deliveryTime: '13',
    },
    {
      id: '3',
      product: 'Placa de asbesto',
      customer: 'Refrigeración Nieto',
      description: 'Placa de 2 x 10 para recubrimiento de tapa',
      unitPrice: '2590.50',
      numberOfPieces: '1',
      creationTime: '6 hours ago',
      deliveryTime: '1',
    },
  ];

  dispatch({ type: actions.UPDATE_REQUIREMENTS, requirements });
  dispatch({ type: actions.END_REQUIREMENTS_LOAD });
};


export const loadWorkOrders = ({ dispatch }) => {
  dispatch({ type: actions.START_WORK_ORDERS_LOAD });

  const workOrders = [
    {
      id: '1',
      product: 'Forma Alambre S',
      customer: 'Tanok',
      description: 'Alambre en forma de S con final doblado hacia el interior',
      worker: 'Carlos Chimal',
      orderType: 'Interna',
      creationTime: '12 hours ago',
      estimatedWorkTime: 6,
    },
    {
      id: '2',
      product: 'Selladores alta fricción',
      customer: 'Procter & Gamble',
      description: 'Empaque sellador blanco para soportar doble fricción en recolección de sobres',
      worker: 'Artemio',
      orderType: 'Externa',
      creationTime: '12 hours ago',
      estimatedWorkTime: 6,
    },
  ];

  dispatch({ type: actions.UPDATE_WORK_ORDERS, workOrders });
  dispatch({ type: actions.END_WORK_ORDERS_LOAD });
};

export const loadDeliveries = ({ dispatch }) => {
  dispatch({ type: actions.START_DELIVIERIES_LOAD });

  const deliveries = [
    {
      id: '1',
      product: 'Resorte tension inoxidable 1/8"',
      customer: 'Papel, Carton y Derivados',
      description: 'Resorte de tension 24 espiras',
      receiver: 'Ángel Flores',
      creationTime: '1 hour ago',
    }
  ];

  dispatch({ type: actions.UPDATE_DELIVERIES, deliveries });
  dispatch({ type: actions.END_DELIVIERIES_LOAD });
}
