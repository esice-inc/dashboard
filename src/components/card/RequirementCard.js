import React from 'react';

import Card from './Card';
import CardRow from './CardRow';

const RequirementCard = ({
  id, productId, customerId, description, unitPrice, numberOfPieces,
  creationTime, deliveryTime, purchaseOrderId, loadProduct, loadCustomer, update,
}) => {
  const [productName, _setProductName] = React.useState('[product]');
  const [customerName, _setCustomerName] = React.useState('[customer]');
  // We can cache the following in a HOC
  React.useEffect(
    () => {
      // loadProduct(productId);
      // loadCustomer(customerId);
    },
    [productName, customerName]
  );

  // Only here we are able to edit Purchase Order ID from the card
  const formattedUnitPrice = `$ ${unitPrice} MXN c/u`;
  const numberOfPiecesIconClass = 'puzzle piece icon';
  const formattedNumberOfPieces = `${numberOfPieces} piezas`;
  const formattedDeliveryTime = `${deliveryTime} días`;
  const deliveryTimeIconClass = 'box icon';
  const formattedCreationTime = `${creationTime}`;

  return (
    <Card
      header={productName}
      subheader={customerName}
      content={description}
    >
      <CardRow
        rightContent={formattedUnitPrice}
        leftIcon={numberOfPiecesIconClass}
        leftContent={formattedNumberOfPieces}
      />

      <CardRow
        rightContent={formattedCreationTime}
        leftContent={formattedDeliveryTime}
        leftIcon={deliveryTimeIconClass}
      />

      <CardRow
        label={{ key: 'OC', value: purchaseOrderId }}
      />
    </Card>
  );
};

export default RequirementCard;
