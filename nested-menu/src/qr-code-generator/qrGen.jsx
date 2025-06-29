import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRGenerator()
{
 
const [inputValue, setInputValue]=useState('');
const [showQR, setShowQR] = useState(false);

const handleGenerate = ()=> {
    if(inputValue.trim !== '')
        setShowQR(true);
    else
        setShowQR(false);
};

const handleDelete=()=>
{
    setShowQR(false);
    setInputValue('');
}
    return(
    
        <div>
            <input type="text" placeholder="Enter you text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)} />
     
           <button style={{marginLeft:"10px"}} onClick ={handleGenerate}>Generate QR code</button>

         <div style={{margin: "20px"}}>
            {showQR && (
                <>
     <QRCode value={inputValue} />
     <br/>
     <button onClick={handleDelete} style={{marginTop: '10px'}}>Delete QR Code</button>
              

                </>
            )
            
            }

         </div>

        </div>


    );    

}