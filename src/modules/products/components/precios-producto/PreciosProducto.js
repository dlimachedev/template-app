import React, { useState } from 'react';
import { TipoPrecio } from '../pp-tipo-precio/TipoPrecio';
import { Precio } from '../pp-precio/Precio';
import { TablaPrecios } from '../pp-tabla-precios/TablaPrecios'

export const PreciosProducto = ( { preciosProducto, setPreciosProducto } ) => {

  
  const [precio, setPrecio] = useState({
    precioId: "2",
    precioDescripcion: "DOCENA",
    importe: "0"
  });

  const handleAgregarPrecioProducto = () => {
    setPreciosProducto([
      ...preciosProducto,
      { ...precio }
    ])
  }

  return (
    <>
      
      <div className="nuevoProducto__divPrecioProducto__divTitulo">
        <span> INFORMACIÓN DE LOS PRECIOS DEL PRODUCTO</span>
      </div>

      <div className="nuevoProducto__divPrecioProducto__row1">
        <TipoPrecio
          precio={ precio }
          setPrecio= { setPrecio }
        />

        <Precio
          precio={ precio }
          setPrecio= { setPrecio }
        />

        <div className="nuevoProducto__divPrecioProducto__row1__divBtnAgregarPrecioProducto">
          <button
            className="btnAgregarPrecioProducto"
            onClick={ handleAgregarPrecioProducto }
          >
            AGREGAR PRECIO
          </button>
        </div>    
      </div>

      <div className="nuevoProducto__divPrecioProducto__row2">
        <TablaPrecios
          preciosProducto={ preciosProducto }
          setPreciosProducto={ setPreciosProducto }
        />
      </div>

    </>
  )
}
