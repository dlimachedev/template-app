import React from 'react';
import { useSelector } from 'react-redux'

export const UnidadMedida = ( { formValue, handleInputChange } ) => {
  
  const { unidadesMedida } = useSelector( state => state.productos );
  
  return (
    <>
      <div className="nuevoProducto__divProducto__row4__divLblUnidadMedida">
        <label className="lblUnidadMedida" htmlFor="cmbUnidadMedida">
          UNIDAD DE MEDIDA:
        </label>
      </div>
      <div className="nuevoProducto__divProducto__row4__divCmbUnidadMedida">
        <select
          id="cmbUnidadMedida"
          className="cmbUnidadMedida"
          name="unidadMedidaId"
          value={ formValue }
          onChange={ handleInputChange }
        >
          {
            unidadesMedida.map(
              ( { unidad_medida_id, descripcion }) => (
                <option key={ unidad_medida_id } value={ unidad_medida_id }>{ descripcion }</option>
              )
            )
          }
        </select>
        <div className="cmbUnidadMedidaFlecha">
          <i></i>
        </div>
      </div>
    </>
  )
}
