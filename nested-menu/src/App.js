import './App.css';
import TreeView from './nestedMenu';
import menus from './nestedMenu/data';
import QRGenerator from './qr-code-generator/qrGen';
function App() {
  return (
    <div className="App">
      {/* <TreeView menus={menus}/> */}
       <h1>🔳 QR Code Generator</h1>
      <QRGenerator />

    </div>
  );
}

export default App;
