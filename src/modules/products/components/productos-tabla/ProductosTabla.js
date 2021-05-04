import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { TablaIconos } from '../pp-tabla-precios/TablaIconos';
import { Edit, Delete } from '@material-ui/icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

export const ProductosTabla = () => {

  const history = useHistory();
  const handleEditProduct = ( productId ) => {
    history.push(`/editarproducto/${productId}`);
  }
  const { productos } = useSelector( state => state.productos );

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary:{
        main: 'rgba(255,255,255,0.87)',
      },
      text: {
        primary: 'rgba(255,255,255,0.87)',
      },
      background: {
        default: '#1f1f1f',
        paper:'#1f1f1f',
      }
    },
    typography:{
      caption:{
        color:'rgba(255,255,255,0.87)',
      }
    }
  });

  const columns = useMemo(
    () => (
      [
        { title: 'CODIGO', field: 'codigo' },
        { title: 'DESCRIPCION', field: 'descripcion' },
        { title: 'UNIDAD DE MEDIDA', field: 'unidad_medida_descripcion' },
        { title: 'UBICACION', field: 'ubicacion' },
        { title: 'ACTIVO', field: 'estado' },
      ]
    )
  , []);

  const data = useMemo(() => ( productos ), [productos])

  const options={
    actionsColumnIndex: -1,
    showTitle: false,
    headerStyle: {
      backgroundColor: '#1f1f1f',
      color: 'rgba(255,255,255,0.87)',
    },
    actionsCellStyle: {
      backgroundColor: '#1f1f1f',
      color: 'rgba(255,255,255,0.87)'
    },
  };

  return (
    <div>
      <MuiThemeProvider theme={theme}>
          <MaterialTable
          icons={ TablaIconos }
          columns={ columns }
          data={ data }
          actions={[
            {
              icon: () => <Edit />,
              tooltip: 'Editar',
              onClick: (event, rowData) => {
                //console.log(rowData);
                handleEditProduct(rowData.producto_id) ;
              }
            },
            {
              icon: () => <Delete />,
              tooltip: 'Eliminar',
              onClick: (event, rowData) => {
                //setPreciosProducto(removeItemFromArr(preciosProducto, rowData.tableData.id));
              }
            },
          ]}
          options={ options }
          style={{
            backgroundColor: '#1f1f1f',
            color: 'rgba(255,255,255,0.87) !important'
          }}
          localization={{
            header: {
                actions: 'ACCIONES'
            },
            body: {
                emptyDataSourceMessage: 'No hay datos',
            }
          }}
          />
      </MuiThemeProvider>
    </div>
  )
}
