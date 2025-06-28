import './App.css';
import TreeView from './nestedMenu';
import menus from './nestedMenu/data';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
