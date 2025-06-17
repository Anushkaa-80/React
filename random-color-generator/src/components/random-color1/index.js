import { useEffect, useState } from "react";



export default function RandomColor1() 
{

   const [color, setColor]= useState("#ff3791");
   const [TypeOfColor, setTypeOfColor] = useState("hex");
   
   function handleHexColor()

   {
    let letters ="0123456789ABCDEF"
    let hex="#";
    for(let i=0;i<6;i++)
       hex += letters[generateRandom(letters.length)];
    
    console.log(hex);
    setColor(hex);
    
   }
 
   function generateRandom(length)
   {
      return Math.floor(Math.random()*length);
   }

   function handleRgbColor()
   {
        const r=generateRandom(256);
         const g=generateRandom(256);
        const b=generateRandom(256);

        setColor(`rgb(${r},${g},${b})`);
        console.log(`rgb(${r},${g},${b})`);
   }
   
   useEffect(() => {
     if(TypeOfColor==='rgb')  handleRgbColor()
     else handleHexColor()

   }, [TypeOfColor])
   
   return (
   <div style={{
      width:"100vw",
      height: "100vh",
      background: color,


   }}> 

        <button onClick={()=>setTypeOfColor("hex")}>Generate hex color</button>
        <button onClick={()=> setTypeOfColor("rgb")}>Generate rgb color</button>
        <button onClick={TypeOfColor==='hex'? handleHexColor: handleRgbColor }>Generate random color</button>
 
        <div style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           fontSize: "40px",
           marginTop:"50px",

        }}>
           <h3>{TypeOfColor==="rgb"? "RGB color = " : "HEX color = "}</h3>
           <h2>{color}</h2>
        </div>
    </div>
   );
}