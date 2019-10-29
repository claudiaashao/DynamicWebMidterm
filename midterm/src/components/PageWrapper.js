import React, {useEffect, useState} from 'react';
import axios from 'axios';

//change background color based on the sunset and sunrise time
export default function PageWrapper({children}){
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [noon, setNoon] = useState('');
    // const [sunrise, setSunrise] = useState('');

    useEffect(()=>{
        axios.get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0`)
            .then(res => {
            console.log(res);
            setSunrise(res.data.results.sunrise);
            setSunset(res.data.results.sunset);
            setNoon(res.data.results.solar_noon);
            })
            .catch(e => console.log(e))
    }, []);

    const today = new Date();
    const now = Date.parse(today);
    const sunriseTime = Date.parse(sunrise);
    const sunsetTime = Date.parse(sunset);
    const noonTime = Date.parse(noon);

    const R = Math.abs(sunriseTime - now)/100000;
    const G = Math.abs(sunsetTime - now)/100000;
    const B = Math.abs(noonTime - now)/100000;

    return(
        <div style={
            {
                height: '100%',
                minHeight: '100vh',
                width: '100%',
                minWidth: '100vw',
                backgroundColor:`rgba(${R},${G},${B},0.3)`,
            }    
        }>
             <div className='PageWrapper'>{children}</div>
        </div>
    )
}
