//menu item receive single item
import MenuList from "./menu-list";
import { useState } from "react";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] =useState({});

    function handleToggleChildren(getCurrentlabel)
    {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel] : ! displayCurrentChildren[getCurrentlabel],
        });
    }
    console.log(displayCurrentChildren);

  return (
    <li >
       <div className="menu-item">
         <p>{item.label}</p>
         {
            item && item.children && item.children.length ? <span onClick={()=> handleToggleChildren(item.label)}>
                {
                    displayCurrentChildren[item.label] ? <FaMinus color ="#f00" size={25}/> : <FaPlus color ="#f00" size={25}/>
                }
            </span> : null
         }
        </div> 

      {/* // here we have rendered the item now, we will check this item has any children or not. */}
      {item && item.children && item.children.length > 0  && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
