import MenuList from "./menu-list";
import { useState } from "react";

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span>+</span>: null}
      </div>

      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
