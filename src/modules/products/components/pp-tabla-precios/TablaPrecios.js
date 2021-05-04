import React, { useMemo } from 'react'
import MaterialTable from 'material-table';
import { TablaIconos } from './TablaIconos';
import { Delete } from '@material-ui/icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const removeItemFromArr = ( arr, item ) => {
  return arr.filter( e => e.tableData.id !== item );
};

export const TablaPrecios = React.memo(( { preciosProducto, setPreciosProducto }) => {

  //console.log( preciosProducto );
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
        { title: 'TIPO PRECIO', field: 'precioDescripcion' },
        { title: 'PRECIO', field: 'importe', type: 'numeric' },
      ]
    )
  , []);

  const options={
    actionsColumnIndex: -1,
    showTitle: false,
    search: false,
    toolbar: false,
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
    <div className="nuevoProducto__divPrecioProducto__row2__tblPreciosProducto">
      <MuiThemeProvider theme={theme}>
          <MaterialTable
          icons={ TablaIconos }
          columns={ columns }
          data={ preciosProducto }
          actions={[
            {
              icon: () => <Delete />,
              tooltip: 'Eliminar',
              onClick: (event, rowData) => {
                setPreciosProducto(removeItemFromArr(preciosProducto, rowData.tableData.id));
              }
            }
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
});
