import { axiosSinToken } from '../../../helpers/axios'
import { types } from './types';

export const cargandoStore = ( estado ) => ({
  type: types.cargandoStore,
  payload: estado
});

export const getProductosFromApi = () => {
  return async(dispatch) => {

      try {

        const resp = await axiosSinToken( 'productos' );
        const { productos } = resp.data;
        dispatch( listarProductos( productos ) );

      } catch (error) {
        console.log(error)
      }

  }
}

const listarProductos = (productos) => ({
  type: types.listarProductos,
  payload: productos
});

export const crearProductoApi = ( producto, precios ) => {
  return async( dispatch ) => {

      try {

        const resp = await axiosSinToken('productos', producto, 'POST');
        const { nuevoProducto, success } = resp.data;

        //console.log(resp.data)

        if ( success ) {
          //console.log( nuevoProducto );
          dispatch( agregarProducto( nuevoProducto[0] ) );
          //console.log(precios);
          const preciosProducto = precios.map( 
            ( pp ) => ({
              productoId: nuevoProducto[0].producto_id,
              precioId:pp.precioId,
              importe:pp.importe,
              activo:true
            })
          );
          //console.log(preciosProducto); 
          try {

            for (const precioProducto of preciosProducto) {
              const resp = await axiosSinToken('precios-productos', precioProducto, 'POST');
              const { nuevoPrecioProducto, success } = resp.data;
              if ( success ) {
                console.log( nuevoPrecioProducto );
                //dispatch( agregarProducto( nuevoProducto[0] ) );
              }
            }
    
          } catch (error) {
            console.log(error);
          }
        }

      } catch (error) {
        console.log(error);
      }

  }
}

const agregarProducto = ( productoNuevo ) => ({
  type: types.agregarProducto,
  payload: productoNuevo
});


export const crearPrecioProductoApi = ( preciosproductos ) => {
  return async( dispatch ) => {

      try {

        for (const precioproducto of preciosproductos) {
          const resp = await axiosSinToken('precios-productos', precioproducto, 'POST');
          const { nuevoPrecioProducto, success } = resp.data;
          if ( success ) {
            console.log( nuevoPrecioProducto );
            //dispatch( agregarProducto( nuevoProducto[0] ) );
          }
        }

      } catch (error) {
        console.log(error);
      }

  }
}

export const getPreciosFromApi = () => {
  return async(dispatch) => {

      try {

        const resp = await axiosSinToken( 'precios' );
        const { precios } = resp.data;
        //console.log( resp.data );
        dispatch( cargarPrecios( precios ) );

      } catch (error) {
        console.log(error)
      }

  }
}

const cargarPrecios = ( precios ) => ({
  type: types.getPrecios,
  payload: precios
});

export const getUnidadesMedidaFromApi = () => {
  return async(dispatch) => {

      try {

        const resp = await axiosSinToken( 'unidades-medida' );
        const { unidadesMedida } = resp.data;
        //console.log( unidadesMedida );
        dispatch( cargarUnidadesMedida( unidadesMedida ) );

      } catch (error) {
        console.log(error)
      }

  }
}

const cargarUnidadesMedida = ( unidadesMedida ) => ({
  type: types.cargarUnidadesMedida,
  payload: unidadesMedida
});

export const getProductoFromApi = ( productoId ) => {
  return async(dispatch) => {

      try {
        dispatch( cargandoStore( true ) );
        const resp = await axiosSinToken( `productos/${productoId}` );
        const respPreciosProducto = await axiosSinToken( `precios-productos/${productoId}` );
        const { producto } = resp.data;
        const { preciosProducto } = respPreciosProducto.data;
        const productoAEditar = {
          producto: producto[0],
          preciosProducto
        }
        dispatch ( editarProducto( productoAEditar ) );
        dispatch( cargandoStore( false ) ); 
        //console.log( productoAEditar );

      } catch (error) {
        console.log( error )
      }

  }
}

const editarProducto = ( productoAEditar ) =>({
  type: types.editarProdcuto,
  payload: productoAEditar
})