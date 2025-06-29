// ite is a parennt component so
//1st we are calling the main tree componecdnt
//which calls the menu llist components
import MenuList from "./menu-list";
import './styles.css'; 
export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
