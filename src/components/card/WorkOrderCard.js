import React from 'react';

import Card from './Card';
import CardRow from './CardRow';

// Properties:
//  - Operador
//  - Tiempo estimado de trabajo
//  - Fecha de inicio de trabajo -> Tiempo trabajando
//  - Interna o Externa
const WorkOrderCard = ({
  id, productId, customerId, description, workerId, status, orderType,
  creationTime, estimatedWorkTime, purchaseOrderId, loadProduct, loadCustomer,
  update,
}) => {
  const [productName, _setProductName] = React.useState('[product]');
  const [customerName, _setCustomerName] = React.useState('[customer]');
  const [workerName, _setWorkerName] = React.useState('[worker]');
  // We can cache the following in a HOC
  React.useEffect(
    () => {
      // loadProduct(productId);
      // loadCustomer(customerId);
    },
    [productName, customerName, workerName]
  );

  const workerNameClass = 'user icon';
  const creationTimeClass = 'clock outline icon';
  const formattedCreationTime = `${creationTime}`;

  return (
    <Card
      header={productName}
      subheader={customerName}
      content={description}
    >
      <CardRow
        leftContent={workerName}
        rightContent={orderType}
        leftIcon={workerNameClass}
      />

      <CardRow
        leftContent='En progreso'
        leftIcon={creationTimeClass}
        rightContent={formattedCreationTime}
      />

      {/* Tiempo que se ha trabajado / Time on line -> NOUP! esto es parte del progreso en taller */}
      <CardRow
        label={{ key: 'OC', value: purchaseOrderId }}
      />
    </Card>
  );
};

export default WorkOrderCard;
