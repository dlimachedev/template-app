import React from 'react';
import { useSelector } from 'react-redux';


export const TipoPrecio = ( { precio, setPrecio }  ) => {

  const { precios } = useSelector( state => state.productos );

  const handleSelectChangePrecios = (e) => {
    setPrecio({
      ...precio,
      precioId: e.target.value,
      precioDescripcion: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
    })
  }

  return (
    <>
      <div className="nuevoProducto__divPrecioProducto__row1__divLblTipoPrecio">
        <label className="lblTipoPrecio" htmlFor="cmbTipoPrecio">
          TIPO DE PRECIO:
        </label>
      </div>
      <div className="nuevoProducto__divPrecioProducto__row1__divCmbTipoPrecio">
        <select
          id="cmbTipoPrecio"
          className="cmbTipoPrecio"
          name="tipoPrecio"
          value={ precio.precioId }
          onChange={ handleSelectChangePrecios }
        >
          {
            precios.map(
              ( { precio_id, descripcion }) => (
                <option key={ precio_id } value={ precio_id }>{ descripcion }</option>
              )
            )
          }
        </select>
        <div className="cmbTipoPrecioFlecha">
          <i></i>
        </div>
      </div>
    </>
  )
}
