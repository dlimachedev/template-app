import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../../../hooks/useForm';
import { Button } from '../../index';
import { Producto } from '../../components/producto/Producto';
import { getUnidadesMedidaFromApi, cargandoStore,getPreciosFromApi, crearProductoApi } from '../../redux/actions';
import { Loading } from '../../../../layout'
import { PreciosProducto } from '../../components/precios-producto/PreciosProducto';


export const NuevoProducto = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch( getUnidadesMedidaFromApi() );
    dispatch( getPreciosFromApi() );
    dispatch( cargandoStore( false ) );
  }, [dispatch])

  const [ formValues, handleInputChange ] = useForm({
    codigo: "",
    descripcion: "",
    descripcionCorta: "",
    ubicacion: "",
    unidadMedidaId: "1",
    activo:"1",
  });

  const [ preciosProducto, setPreciosProducto ] = useState([]);
  const handleBtnGuardar = () => { dispatch( crearProductoApi( formValues, preciosProducto ) ); };

  return (
    
    <div className="nuevoProducto">
      <Loading/>
      <div className="nuevoProducto__divProducto">
        <Producto
          formValues={ formValues }
          handleInputChange={ handleInputChange }
        />
      </div>

      <div className="nuevoProducto__divPrecioProducto">
        <PreciosProducto 
          preciosProducto={ preciosProducto }
          setPreciosProducto={ setPreciosProducto }
        />
      </div> 

      <div className="nuevoProducto__divGuardar">
        <Button
          className="nuevoProducto__divGuardar__btnGuardar"
          onClick={ handleBtnGuardar }
          label="GUARDAR"
        />
      </div>

    </div>
  )
}
