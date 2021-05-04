import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const TablaIconos = {
    Add: forwardRef((props, ref) => <AddBox color="primary" {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check color="primary" {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear color="primary" {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline color="primary" {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight color="primary" {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit color="primary" {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt color="primary" {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList color="primary" {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage color="primary" {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage color="primary" {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight color="primary" {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft color="primary" {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear color="primary"{...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search color="primary" {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward color="primary" {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove color="primary" {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn color="primary" {...props} ref={ref} />)
  };