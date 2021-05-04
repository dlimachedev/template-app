import React, { useContext } from 'react';
import { SidebarContext } from './SidebarContext';
import { SidebarContentItem } from './SidebarContentItem';

export const SidebarContent = ({ nav }) => {

	const { itemSelected, setItemSelected } = useContext( SidebarContext );
	const currentItemSelected = id => setItemSelected(id);
    
	return (
		<div className="sidebarBody">
			{
        nav.map(( item ) => {
          return(
            <SidebarContentItem 
              key = { item.id } 
              item = { item } 
              currentItemSelected = { currentItemSelected }
              active = { item.id === itemSelected }
            />
					)
				})
      }
		</div>
	)
}
