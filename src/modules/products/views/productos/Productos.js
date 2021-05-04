import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProductosFromApi } from '../../redux/actions'
import { ProductosTabla } from '../../components/productos-tabla/ProductosTabla';
import { Button } from '../../../../ui';

export const Productos = ( { history } ) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( getProductosFromApi() );
  }, [ dispatch ])

  const handleNuevoProducto = () => {
    history.push('/nuevoproducto');
  }

  return (
    <div className="productos">

      <div className="productos__divTitulo">
        <span> LISTADO DE PRODUCTOS </span>
      </div>

      <div className="productos__divAcciones">
        <Button
          className="nuevoProducto__divGuardar__btnGuardar"
          onClick={ handleNuevoProducto }
          label="NUEVO"
        />
      </div>

      <div className="productos__divTablaProductos">
        <ProductosTabla />
      </div>

    </div>
  )
}
