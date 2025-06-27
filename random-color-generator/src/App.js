// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
// import RandomColor1 from "./components/random-color1";
// import StarRating from "./components/star-rating";
import menus from "./components/nested-menu/data";
import TreeView from "./components/nested-menu";

function App()
{
  return (

  <div className="App">
    {/* Random color generator */}
   {/* <RandomColor1/> */}
     {/* <StarRating/> */}

     {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}  /> */}

     {/* <LoadMoreData/>   */}
     
     <TreeView menus ={menus}/>     
    
     </div>  
  
  );
}

export default App;