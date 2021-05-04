import React from 'react';

export const Codigo = ( { formValue, handleInputChange } ) => {
  return (
    <>
      <div className="nuevoProducto__divProducto__row1__divLblCodigo">
        <label className="lblCodigo" htmlFor="txtCodigo">
          CÓDIGO:
        </label>
      </div>

      <div className="nuevoProducto__divProducto__row1__divTxtCodigo">
        <input
          id="txtCodigo"
          type="text"
          autoComplete="off"
          className="txtCodigo"
          placeholder="CÓDIGO"
          name="codigo"
          value={ formValue }
          onChange={ handleInputChange }
        />
      </div>
    </>
  )
}
