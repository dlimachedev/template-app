import React from 'react'

export const Descripcion = (  { formValue, handleInputChange } ) => {
  return (
    <>
      <div className="nuevoProducto__divProducto__row2__divLblDescripcion">
        <label className="lblDescripcion" htmlFor="txtDescripcion">
          DESCRIPCIÓN:
        </label>
      </div>
      <div className="nuevoProducto__divProducto__row2__divTxtDescripcion">
        <input
          id="txtDescripcion"
          type="text"
          autoComplete="off"
          className="txtDescripcion"
          placeholder="DESCRIPCIÓN"
          name="descripcion"
          value={ formValue }
          onChange={ handleInputChange }
        />
      </div>
    </>
  )
}
