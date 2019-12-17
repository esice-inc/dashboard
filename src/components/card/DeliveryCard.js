import React from 'react';

import Card from './Card';
import CardRow from './CardRow';

// Properties:
//  - Receptor
//  - Fecha de entrega
const DeliveryCard = ({
  id, productId, customerId, description, workerId, status, dateOfDelivery,
  creationTime, purchaseOrderId, loadProduct, loadCustomer,
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
  const formattedCreationTime = `${creationTime}`;

  return (
    <Card
      header={productName}
      subheader={customerName}
      content={description}
    >
      <CardRow
        leftContent={workerName}
        leftIcon={workerNameClass}
        rightContent={formattedCreationTime}
      />

      {/* This must be a card input*/}
      <CardRow
        label={{ key: 'OC', value: purchaseOrderId }}
      />
    </Card>
  );
};

export default DeliveryCard;
