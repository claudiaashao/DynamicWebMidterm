//individual plant info
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PageWrapper from '../components/PageWrapper';

const token = 'dGJvcUZUSGthWTJwZkRtZFlpNklwUT09';

export default function Plant () {
    const [joke, setJoke] = useState({});
    const [plant, setPlant] = useState({});

    useEffect(()=>{
        axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?token=${token}`)
            .then(res => {
            console.log('plants', res);
            setPlant(res);
            })
            .catch(e => console.log(e))
    }, []);

    useEffect(()=>{
        axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' }})
            .then(jokes => {
                console.log('jokes', jokes);
                setJoke(jokes);
            })
            .catch(e => console.log(e))
    }, []);


    return(
        <PageWrapper>
            <div>
                <a href={`/`}>back to home</a>
                <h1>MY PLANTS</h1>
                <p> Tell your plant babies a dad joke: </p>
                <p>{joke.data && joke.data.joke}</p>
            </div>
        </PageWrapper>
    )
}