import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { SidebarContext } from "./SidebarContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const SidebarContentItem = ({ item, currentItemSelected, active }) => {

	const { itemSelected } = useContext( SidebarContext );
  let showSubNavId = (localStorage.getItem(`showSubNav${item.id}`) === 'true')? true : false;
  const [subnav, setSubnav] = useState( showSubNavId || false);
  const showSubNav = () => { setSubnav(!subnav); localStorage.setItem(`showSubNav${item.id}`,!subnav); };

	return (
		<>
      <Link
        className={active?"sidebarBody__link active":"sidebarBody__link"}
        exact="true"
        to={item.path}
        onClick={ () => { currentItemSelected(item.id);item.subnav && showSubNav(); localStorage.setItem('itemSelected',item.id); } }
      >
        <span className="sidebarBody__link__icon"> {item.icon} </span> 
        <span className="sidebarBody__link__name"> {item.name} </span>
        <span className="sidebarBody__link__arrow">
          {
            item.subnav && subnav
            ? <FaChevronDown/>
            : item.subnav
            ? <FaChevronUp/>
            : null
          }
        </span>
      </Link>
      {subnav &&
        item.subnav?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Link 
                className={itemSelected===item.id?"sidebarBody__linkSubnav active":"sidebarBody__linkSubnav"}
                exact="true" 
                to={item.path}
                onClick={ () => { currentItemSelected(item.id); localStorage.setItem('itemSelected',item.id); } }
              >
                <span className="sidebarBody__link__icon"> {item.icon} </span> <span className="sidebarBody__link__name"> {item.name} </span>
              </Link>
            </React.Fragment>
          );
        })}
    </>
	)
}
