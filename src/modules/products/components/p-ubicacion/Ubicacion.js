import React from 'react'

export const Ubicacion = ( { formValue, handleInputChange} ) => {
  return (
    <>
      <div className="nuevoProducto__divProducto__row3__divLblUbicacion">
        <label className="lblUbicacion" htmlFor="txtUbicacion">
          UBICACIÓN:
        </label>
      </div>
      <div className="nuevoProducto__divProducto__row3__divTxtUbicacion">
        <input
          id="txtUbicacion"
          type="text"
          autoComplete="off"
          className="txtUbicacion"
          placeholder="UBICACIÓN"
          name="ubicacion"
          value={ formValue }
          onChange={ handleInputChange }
        />
      </div>
    </>
  )
}
