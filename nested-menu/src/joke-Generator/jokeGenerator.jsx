import { useState } from "react";
import "./joke.css";

export default function JokeGenerator()
{
    const [joke, setJoke] = useState("");
    const [loading, setLoading]=useState(false);


    async function fetchJoke()
    {
        setLoading(true);
        try{
            const response =await fetch("https://official-joke-api.appspot.com/jokes/random");
            const data= await response.json();
            setJoke(`${data.setup}  😂 ${data.punchline}`);

        }catch(error)
        {
           setJoke("Kuch toh gadbad hai, joke bhaag gaya! 🏃‍♂️💨"); 
        }
     setLoading(false);   
    }
return (
    <div className="joke-container">
        <h1 className="joke-title">
              😂 Random Joke Generator 🤣
        </h1>
        <button className="joke-button" onClick={fetchJoke}>
        {loading ? "Loading Chuckles..." : "Make me Laugh!"}
      </button>
     < p className="joke-text">{joke}</p>
    </div>
);


}