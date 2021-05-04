import { types } from './types';

const initialState = {
  loading: true,
  //ui: [],
  productos: [],
  precios:[],
  unidadesMedida:[],
  editarProducto: null
};

export const productReducer = ( state = initialState, action ) => {

  switch (action.type) {

    case types.cargandoStore:
      return {
        ...state,
        loading: action.payload
      }

    case types.cargarUnidadesMedida:
      return {
        ...state,
        unidadesMedida: [...action.payload]
      }

    case types.listarProductos:
      return {
        ...state,
        productos:[...action.payload]
      }
    
    case types.getPrecios:
      return {
        ...state,
        precios:[...action.payload]
      }
    
    case types.agregarProducto:
      return {
        ...state,
        productos: [
          ...state.productos,
          action.payload
        ]
      }
    
    case types.editarProdcuto:
      return {
        ...state,
        editarProducto: {
          ...action.payload
        }
      }

    default:
      return state;
  }

}