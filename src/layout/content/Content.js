import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { Productos, NuevoProducto, EditarProducto } from '../../modules/products';
import { Customers } from '../../modules/customers';
import { Invoicing } from '../../modules/invoicing';
import { Home } from '../../modules/home/Home';

export const Content = () => {
  return (
    <div className="content">
      <Switch>
				<Route exact path="/productos" render={props => <Productos {...props}/>} />
        <Route exact path="/nuevoproducto" render={props => <NuevoProducto {...props}/>} />
				<Route exact path="/clientes" render={props => <Customers {...props}/>} />
				<Route exact path="/facturacion" render={props => <Invoicing {...props}/>} />
        <Route
          exact
          path="/editarproducto/:productId"
          component={ EditarProducto }
        />
        <Route exact path="/home" render={props => <Home {...props}/>} />

				<Redirect from="/" to="/home" />
      </Switch>
    </div>
  )
}
