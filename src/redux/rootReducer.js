import { combineReducers } from 'redux';
import { productReducer } from '../modules/products/redux/productReducer';
//import { unidadesMedidaReducer } from '../modules/unidadesMedida';
import { reducer as mainReducer } from './reducer'


export const rootReducer = combineReducers({
  productos: productReducer,
  //unidadesMedida: unidadesMedidaReducer,
  main: mainReducer
})