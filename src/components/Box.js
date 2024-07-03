import React,{useState} from 'react'
import Landing from "./Landing";
import Forecast from "./Forecast";
export default function Box(props) {

  let [latitude, setLatitude] = useState(null);
  let [longitude, setLongitude] = useState(null);
  let [error, setError] = useState(null);

  const  pose= ()=> {
 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);
          
        
          
        },
        (error) => {
          setError(error.message);
          console.log(error.message);
          
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      console.log("abhay");
    }
  }  
  
  

    

pose();



if(latitude)
  {
    return(
      <div className="box1"  >
     
      <Forecast lat={latitude} lon={longitude}/>
        
      </div>
    )
  }
  else{

    return(
      <div className="box2"  >
    
    <Landing />

      </div>
    )
  }




 
}
