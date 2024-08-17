import { useState } from 'react';
import InfoBox from './InfoBox';
 import SearchBox from './SearchBox';
 import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Dhanbad",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo =(result)=>{
        setWeatherInfo(result);
    }
return(
    <div>
        <div className='head'>
        <h1><i>SkyScout</i></h1>
        <marquee>
            <p><b>Real-Time Weather Insights</b></p>
            </marquee>
        <hr></hr>
        </div>
        
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
)
}
