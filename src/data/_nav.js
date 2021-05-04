import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { BsFillPersonFill, BsPersonLinesFill } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
//import { GrTransaction } from "react-icons/gr";

const nav = [
  {
    id: 1,
    _tag: 'NavItem',
    icon: <FaIcons.FaHome/>,
    name: 'Inicio',
    path: '/inicio',
  },
  {
    id: 2,
    _tag: 'NavDropdown',
    icon: <FaIcons.FaProductHunt/>,
    name: 'Productos',
    path: '#',
    subnav: [
      {
        id: 21,
        icon: <FaIcons.FaListUl/>,
        name: 'Listado de Productos',
        path: '/productos',
      },
      {
        id: 22,
        icon: <FaIcons.FaListUl/>,
        name: 'Nuevo Producto',
        path: '/nuevoproducto',
      },
    ]
  },
  {
    id: 3,
    _tag: 'NavDropdown',
    icon: <BsFillPersonFill/>,
    name: 'Clientes',
    path: '#',
    subnav: [
      {
        id: 31,
        icon: <BsPersonLinesFill/>,
        name: 'Listado de Clientes',
        path: '/clientes',
      },
    ]
  },
  {
    id: 4,
    _tag: 'NavDropdown',
    icon: <RiBillLine/>,
    name: 'Facturacion',
    path: '#',
    subnav: [
      {
        id: 41,
        icon: <MdPayment/>,
        name: 'Facturas',
        path: '/facturas',
      },
      {
        id: 42,
        icon: <MdPayment/>,
        name: 'Boletas',
        path: '/boletas',
      },
      {
        id: 43,
        icon: <MdPayment/>,
        name: 'Notas de crédito',
        path: '/notascredito',
      },
      {
        id: 44,
        icon: <MdPayment/>,
        name: 'Notas de débito',
        path: '/notasdebito',
      },
    ]
  },
  {
    id: 5,
    _tag: 'NavDropdown',
    icon: <FaIcons.FaFileInvoiceDollar/>,
    name: 'Kardex',
    path: '#',
    subnav: [
      {
        id: 51,
        icon: <FaIcons.FaFileInvoiceDollar/>,
        name: 'Ver kardex',
        path: '/kardex',
      },
    ]
  },
]

export default nav;