
import React, {useState , useEffect} from 'react';
import Searching from "./Searching" ;
export default function Forecast(props) {

let lat =  props.lat;
let lon = props.lon ;
let apikey = "e598ce3d4de53bd4b416a4460bc2c1d6" ;


const [datain , setData] = useState("null") ;


async function fetchWeatherData(lat, lon,apikey) {
    

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`  ;

      const response = await fetch(apiUrl);
      
      
      const data = await  response.json();
  
      setData(
        {
          Tempreture: Math.round(data.main.temp) ,
          Feels: data.main.feels_like ,
          weather_status : data.weather[0].description ,
          Wind: data.wind.speed ,
          City : data.name ,
          Humidity : data.main.humidity ,
          Country: data.sys.country ,
          weather_status : data.weather[0].description ,
          icode: data.weather[0].icon ,
          sealevel : data.main.sea_level ,
          pressure : data.main.pressure,
          tempmax: data.main.temp_max ,
          tempmin : data.main.temp_min,
          visibility: data.main.visibility,
          windgust: data.wind.gust 



        }
      );
     
    }
;

useEffect(()=>{
  fetchWeatherData(lat,lon,apikey) ;

},[]);

let tempstatus ;

  
function settempstatus(){


if(datain.Tempreture<5)
  {
    tempstatus=" Extream Cold"
  }
  if(5>=datain.Tempreture<20)
  {
     tempstatus="Cold"
  }
  if(20<=datain.Tempreture<35)
  {
    tempstatus="Moderate"
  }
  if(35<=datain.Tempreture<45)
  {
    tempstatus="Hot"
  }
  if(45<=datain.Tempreture)
  {
    tempstatus=" Exessive Heat"
  }


};
















      
 if(datain)
  {  
    
   let id = `https://openweathermap.org/img/wn/${datain.icode}@2x.png`
    settempstatus();
    return (
      <div className='forecast'>
             <div className="place">
               <div className="cityname"> 
                <h3 className='cityname'>{datain.City} {datain.Country}</h3>
               </div>
               <div className="searchbar">
               <Searching   func={fetchWeatherData} api={apikey} />
               
               </div>
             </div>
             <div className="temp">
                  <p className='degree'> {datain.Tempreture} &#176;C </p>
                  <p className="degree"> {tempstatus}</p>
                  <div className='weather'>    
                       <img src={id}/>
                       <p className='weatstatus'> {datain.weather_status}</p> 
                  </div>
             </div>
             
             <div className="insight">
             
             <h3 className='inhead'>MORE INSIGHTS</h3>
              <div className="insigh">
              <div className="insight1">
              <ul>
                  <li>Humidity : {datain.Humidity} %</li>
                  <li>Feels like : {datain.Feels} &#176;C</li>
                  <li>Wind speed : {datain.Wind} m/s</li> 
                  <li>Wind gust : {datain.windgust}</li> 
                  <li>City : {datain.City}</li>
                 
           </ul>
           
              </div>
              <div className="insight2">
              <ul> 
                  <li>Sea level : {datain.sealevel} m</li>
                  <li>Pressure : {datain.pressure}</li>
                  <li>Visibility : {datain.visibility}</li>
                  <li>Maximmum Tempreture : {datain.tempmax} &#176;C</li>
                  <li>Minimum Tempreture : {datain.tempmin} &#176;C</li>
        
               </ul>
            </div> 
            </div> 
          
              </div>





        
          
             </div>
       


    )
  }
}
