import React from 'react'

export const Precio = ( { precio, setPrecio} ) => {

  const handleInputChangePrecios = (e) => {
    setPrecio({
      ...precio,
      importe: e.target.value,
    });
  }

  return (
    <>
      <div className="nuevoProducto__divPrecioProducto__row1__divLblPrecio">
        <label className="lblPrecio" htmlFor="txtPrecio">
          PRECIO:
        </label>
      </div>
      <div className="nuevoProducto__divPrecioProducto__row1__divLTxtPrecio">
        <input
          id="txtPrecio"
          type="text"
          autoComplete="off"
          className="txtPrecio"
          placeholder="PRECIO"
          name="precio"
          value={ precio.importe }
          onChange={ handleInputChangePrecios }
        />
      </div>
    </>
  )
}
