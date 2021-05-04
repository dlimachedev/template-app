import React, { useState } from "react";
import { SidebarContent } from "./SidebarContent";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";

import navigation from '../../data/_nav';
import { SidebarContext } from "./SidebarContext";

export const Sidebar = () => {

  const [ itemSelected, setItemSelected ] = useState(parseInt(localStorage.getItem('itemSelected')) ||  null);

  return (
		<SidebarContext.Provider value={{
      itemSelected,
      setItemSelected
    }}>
      <>
        <SidebarHeader/>
        <SidebarContent nav = { navigation }/>
        <SidebarFooter/> 
      </>
		</SidebarContext.Provider>
  );
};
