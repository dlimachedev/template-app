import React from 'react'
import { Codigo } from '../p-codigo/Codigo';
import { Descripcion } from '../p-descripcion/Descripcion';
import { DescripcionCorta } from '../p-descripcion-corta/DescripcionCorta';
import { UnidadMedida } from '../p-unidad-medida/UnidadMedida';
import { Ubicacion } from '../p-ubicacion/Ubicacion';
import { Activo } from '../p-activo/Activo';

export const Producto = ( { formValues, handleInputChange } ) => {

  const { codigo, descripcion, descripcionCorta, ubicacion, unidadMedidaId, activo } = formValues;
  console.log(unidadMedidaId);
  return (
    <>

      <div className="nuevoProducto__divProducto__divTitulo">
        <span> INFORMACIÓN DEL PRODUCTO </span>
      </div>

      <div className="nuevoProducto__divProducto__row1">
        <Codigo
          formValue={ codigo }
          handleInputChange={ handleInputChange }
        />
      </div>

      <div className="nuevoProducto__divProducto__row2">
        <Descripcion
          formValue={ descripcion }
          handleInputChange={ handleInputChange }
        />
      </div>

      <div className="nuevoProducto__divProducto__row3">
        <DescripcionCorta
          formValue={ descripcionCorta }
          handleInputChange={ handleInputChange }
        />
        <Ubicacion
          formValue={ ubicacion }
          handleInputChange={ handleInputChange }
        />
      </div>

      <div className="nuevoProducto__divProducto__row4">
        <UnidadMedida
          formValue={ unidadMedidaId }
          handleInputChange={ handleInputChange }
        />
        <Activo
          formValue={ activo }
          handleInputChange={ handleInputChange }
        />
      </div>

    </>
    
  )
}
