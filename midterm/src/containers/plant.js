//individual plant info
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PageWrapper from '../components/PageWrapper';

// const token = 'dGJvcUZUSGthWTJwZkRtZFlpNklwUT09';
const token = 'eUswN1FQNUVBTFlSbzFQSnB0RTFRQT09';

export default function Plant (props) {
    const [joke, setJoke] = useState({});
    const [plant, setPlant] = useState({});

    useEffect(()=>{
        const urlParams = new URLSearchParams(props.location.search);
        const plantParam = urlParams.get('plant') ? urlParams.get('plant') : '';
        setPlant(plantParam);

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=${plantParam}`)
            .then(res => {
            console.log('res', res);  
            setPlant(res);
            })
            .catch(e => console.log(e))
    }, []);


    useEffect(()=>{
        axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' }})
            .then(jokes => {
                setJoke(jokes);
            })
            .catch(e => console.log(e))
    }, []);

    return(
        <PageWrapper>
            <div>
                <h1>PLANT BABIES</h1>
                <div className="PlantNav">
                    <div className="buttons">
                        <div className="container">
                            <a href={`/`} className="btn effect01" target="_blank"><span>back to home</span></a>
                        </div>
                    </div>
                    <h3>Here are your eatable Babies. Yum Yum.</h3>
                    <a className={`Nav__Item ${plant==='Mango' ? 'Nav__Item--active': ''}`} href="/myplants?plant=Mango">Mango</a>
                    <a className={`Nav__Item ${plant==='Banana' ? 'Nav__Item--active': ''}`} href="/myplants?plant=Banana">Banana</a>
                    <a className={`Nav__Item ${plant==='Pineapple' ? 'Nav__Item--active': ''}`} href="/myplants?plant=Pineapple">Pineapple</a>
                    <a className={`Nav__Item ${plant==='Chickpea' ? 'Nav__Item--active': ''}`} href="/myplants?plant=Chickpea">Chickpea</a>
                    <a className={`Nav__Item ${plant==='Rosemary' ? 'Nav__Item--active': ''}`} href="/myplants?plant=Rosemary">Rosemary</a>
                    <a className={`Nav__Item ${plant==='Vanilla' ? 'Nav__Item--active': ''}`} href="/myplants?plant=Vanilla">Vanilla</a>
                </div>

                <div className="PlantContent">
                    <div className="header">
                        <p> Tell your plant babies a dad joke: </p>
                        <p className="joke">{joke.data && joke.data.joke}</p>
                    </div>

                    <h3>{plant.data && plant.data.results[0].tfvname}</h3>
                    <p><b>Other Names: </b>{plant.data && plant.data.results[0].othname}</p>
                    <p><b>Description: </b>{plant.data && plant.data.results[0].description}</p>
                    <p><b>Uses: </b>{plant.data && plant.data.results[0].uses}</p>
                    <p><b>Health Benefits: </b>{plant.data && plant.data.results[0].health}</p>
                    <p><b>Soil Requirement: </b>{plant.data && plant.data.results[0].soil}</p>
                </div>
            </div>
        </PageWrapper>
    )
}
