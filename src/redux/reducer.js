//import { types } from "./types";

const initialState = {
  dropdownEstados: [
    {
      id: 1,
      descripcion: 'ACTIVO'
    },
    {
      id: 0,
      descripcion: 'INACTIVO'
    }
  ],
};

export const reducer = ( state = initialState, action ) => {

  switch (action.types) {
    /*case types.cargarDropdownEstados:
      return {
        ...state,
        dropdownEstados:[...action.payload]
      }*/
  
    default:
     return state
  }

}