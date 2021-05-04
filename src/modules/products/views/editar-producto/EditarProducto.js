import React, { useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../../../hooks/useForm';
import { getProductoFromApi,getUnidadesMedidaFromApi,getPreciosFromApi } from '../../redux/actions';
import { Loading } from '../../../../layout'
import { Producto } from '../../components/producto/Producto';

export const EditarProducto = React.memo(() => {

  const dispatch = useDispatch();
  const { loading, editarProducto } = useSelector( state => state.productos );
  const { productId } = useParams();
  
  const [ formValues, handleInputChange, setFormValues ] = useForm();
  const setFormValuesMemo = useCallback((values) => {
      setFormValues( values )
  },[setFormValues]);

  useEffect(() => {
    dispatch( getUnidadesMedidaFromApi() );
    dispatch( getPreciosFromApi() );
    dispatch( getProductoFromApi( productId ) )
  }, [dispatch, productId]);

  useEffect(() => {
    console.log('setFormValues');
    if ( editarProducto != null ){
      setFormValuesMemo( {
        ...editarProducto.producto,
        descripcionCorta: editarProducto.producto.descripcion_corta,
        unidadMedidaId: editarProducto.producto.unidad_medida_id
      } )
    }
  }, [ editarProducto, setFormValuesMemo ]);
  
  //console.log('formValues',formValues);

  return (
    <div className="editarProducto">
      {
        (loading || formValues===null || Object.keys(formValues).length === 0) 
        ?  <Loading />
        : 
        <>
          <div className="nuevoProducto__divProducto">
            <Producto
              formValues={ formValues }
              handleInputChange={ handleInputChange }
            />
          </div>
        </>
      }
      
    </div>
  )
})
