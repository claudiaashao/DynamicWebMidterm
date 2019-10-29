//landing page
//background color based on the sunset and sunrise time
//the wonderful website name is provided by fellow IDM student Raymond Lin.

import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function Home (props) {

    return(
        <PageWrapper>
            <div className = "title">
                <h1>PLANT PARENTHOOD</h1>
                <p> Welcome to Plant Parenthood! Ready to be a parent? </p>
                
                <a href={`/plant`}>see all my plants</a>
            </div> 
        </PageWrapper>
    )
}