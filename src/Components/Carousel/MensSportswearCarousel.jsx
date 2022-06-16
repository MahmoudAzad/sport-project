import React, { useEffect, useState } from 'react';
import HomeCarouselHelper from '../Helper/homeCarouselHelper';

const MensSportwearCarousel = () => {

    const [mensSport , setMensSport] = useState("") ;

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

        fetch("http://localhost:1337/mens-sport-carousels", requestOptions)
            .then(response => response.json())
            .then(result => { setMensSport(result) });
    }, [])

    if(!mensSport){ return <p>
        please wait...
    </p>}

    console.log("mens Sport =>" , mensSport);

    return ( 
        <HomeCarouselHelper products={mensSport} title="لباس ورزشی مردانه" />
     );
}
 
export default MensSportwearCarousel;