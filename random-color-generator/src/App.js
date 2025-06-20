import ImageSlider from "./components/image-slider";
import RandomColor1 from "./components/random-color1";
import StarRating from "./components/star-rating";

function App()
{
  return (

  <div className="App">
    {/* Random color generator */}
   {/* <RandomColor1/> */}
     {/* <StarRating/> */}

     <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}  />
  </div>  
  
  );
}

export default App;