import React from 'react'

export const DescripcionCorta = ( { formValue, handleInputChange } ) => {
  return (
    <>
      <div className="nuevoProducto__divProducto__row3__divLblDescripcionCorta">
        <label className="lblDescripcionCorta" htmlFor="txtDescripcionCorta">
          DESCRIPCIÓN CORTA:
        </label>
      </div>
      <div className="nuevoProducto__divProducto__row3__divTxtDescripcionCorta">
        <input
          id="txtDescripcionCorta"
          type="text"
          autoComplete="off"
          className="txtDescripcionCorta"
          placeholder="DESCRIPCIÓN CORTA"
          name="descripcionCorta"
          value={ formValue }
          onChange={ handleInputChange }
        />
      </div>
    </>
  )
}
