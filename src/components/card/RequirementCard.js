import React from 'react';

import Card from './Card';
import CardRow from './CardRow';
import CardInput from './CardInput';

const RequirementCard = ({
  id, saleId, productId, customerId, description, unitPrice, numberOfPieces,
  deliveryTime, purchaseOrderId, creationTime,
  loadProduct, loadCustomer, update,
  isSelected, setSelectedCard,
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
  const formattedUnitPrice = `${unitPrice} MXN`;
  const unitPriceIconClass = 'dollar sign icon';
  const numberOfPiecesIconClass = 'puzzle piece icon';
  const formattedNumberOfPieces = `${numberOfPieces} `;
  const formattedDeliveryTime = `${deliveryTime} días`;
  const deliveryTimeIconClass = 'box icon';
  const formattedCreationTime = `${creationTime}`;

  return (
    <Card
      header={productName}
      subheader={customerName}
      content={description}
      isSelected={isSelected}
      onClick={() => setSelectedCard({ saleId })}
    >
      <CardRow
        leftContent={formattedUnitPrice}
        leftIcon={unitPriceIconClass}
        rightIcon={numberOfPiecesIconClass}
        rightContent={formattedNumberOfPieces}
      />

      <CardInput
        label={'Tiempo de Entrega:'}
        value={formattedDeliveryTime}
      />

      <CardInput
        label={'Orden de Compra:'}
        value={purchaseOrderId}
      />
    </Card>
  );
};

export default RequirementCard;
