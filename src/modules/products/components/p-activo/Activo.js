import React from 'react'

export const Activo = ( { formValue, handleInputChange } ) => {
  return (
    <>
      <div className="nuevoProducto__divProducto__row4__divLblActivo">
        <label className="lblActivo" htmlFor="cmbActivo">
          ACTIVO:
        </label>
      </div>
      <div className="nuevoProducto__divProducto__row4__divCmbActivo">
        <select
          id="cmbActivo"
          className="cmbActivo"
          name="activo"
          value={ formValue }
          onChange={ handleInputChange }
        >
          <option value={1}>ACTIVO</option>
          <option value={0}>INACTIVO</option>
        </select>
        <div className="cmbActivoFlecha">
          <i></i>
        </div>
      </div>
    </>
  )
}
