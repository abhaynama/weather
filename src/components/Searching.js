

import React,{useState ,useEffect}from 'react' ;

export default function Searching(props) {

const [newlat , setnewlat] = useState();
const [newlon, setnewlon] = useState() ;



const Changelocation=(e)=>{
  
e.preventDefault();

async function get_lat(){

  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=e598ce3d4de53bd4b416a4460bc2c1d6`);
  const dat = await res.json() ;
  setnewlat(dat[0].lat);
  setnewlon(dat[0].lon) ;


}

get_lat();
if(newlat){
  console.log(newlat);
  console.log(newlon);
  props.func(newlat,newlon,props.api) ;
}





}


let searchb = document.querySelector("form");
let input = document.querySelector("input");







  return (
    <div>
      <form  onSubmit={Changelocation}  className='form'  >
                
                <input className='search' type="text" placeholder="Enter the city name.."/>
                </form>
 
    </div>
  )
}
