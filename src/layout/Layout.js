import React from 'react'
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { Header, Sidebar, Content, Footer } from './index';

const Layout = () => {
  return (

    <Provider store={ store }>

      <div className="mainContainer">
        <div className="headerArea">
          <Header />
        </div>
        <div className="sidebarArea">
          <Sidebar />
        </div>
        <div className="contentArea">
          <Content />
        </div>
        <div className="footerArea">
          <Footer />
        </div>
      </div>

    </Provider>
  )
}

export default Layout;
