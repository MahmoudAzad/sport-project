import React, { useEffect, useState } from 'react';
import HomeCarouselHelper from '../Helper/homeCarouselHelper';

const WomensSportwearCarousel = () => {

    const [womensSport , setWomensSport] = useState("");

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Request-Headers", "*");
        myHeaders.append("Access-Control-Request-Method", "*");
        myHeaders.append("accept", "*/*");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:1337/womens-sport-carousels", requestOptions)
            .then(response => response.json())
            .then(result => { setWomensSport(result) });
    }, [])

    if(!womensSport){ return <p>
        please wait...
    </p>}

    return (
        <HomeCarouselHelper products={womensSport} title="لباس ورزشی زنانه" />
    );
}

export default WomensSportwearCarousel;