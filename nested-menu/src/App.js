import "./App.css";
import TreeView from "./nestedMenu";
import menus from "./nestedMenu/data";
import QRGenerator from "./qr-code-generator/qrGen";
import ScrollIndicator from "./scroll-indicator";
import JokeGenerator from "./joke-Generator/jokeGenerator";
function App() {
  return (
    <div className="App">
      {/* <TreeView menus={menus}/> */}
      {/* <h1>🔳 QR Code Generator</h1>
      <QRGenerator /> */}
      {/* Scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

 <JokeGenerator />
    </div>
  );
}

export default App;
