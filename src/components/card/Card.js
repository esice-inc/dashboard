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

const Card = (props) => (
  <div className="ui card" style={ cardStyle }>
    <div className="content">
      <img className="right floated mini ui image" src="/images/avatar/elliot.jpg" />
      <div className="header">
      { props.title }
      </div>
      <div className="meta">
        { props.customer }
      </div>
      <div className="description">
        { props.description }
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        { props.rows[0].right }
      </span>
      <span>
        <i className="puzzle piece icon"></i>
        { props.rows[0].left }
      </span>
    </div>
    <div className="extra content">
      <span className="right floated">
        { props.rows[1].right }
      </span>
      <span>
        <i className="box icon"></i>
        { props.rows[1].left }
      </span>
    </div>
  </div>
);


export default Card;
