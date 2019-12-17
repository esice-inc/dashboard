import React from 'react';

const cardStyle = {
  width: 'auto',
};

// Cuantos dias quedan para la entrega?
// Cuantos dias lleva en esta linea?
// Cotizacion -> PRECIO
// Orden -> Interna o Externa | Operador?
// Entrega -> Parcial o Completa | Quien entrega?
// Tiempo restante para entrega y en click sale tiempo acordado de entrega
//
// SALESCARD!
// Fijar tamanio en descripcion de card
// Rows con iconos!!!

// Show complete history of card
// Should this have identifier? or the 'purchase order id' will be enough
const Card = ({ header, subheader, content, children }) => {
  return (
    <div className="ui card" style={ cardStyle }>
      <div className="content">
        <img className="right floated mini ui image" src="/images/avatar/elliot.jpg" />
        <div className="header">
        { header }
        </div>
        <div className="meta">
          { subheader }
        </div>
        <div className="description">
          { content }
        </div>
      </div>
      { children }
    </div>
  );
};


export default Card;
