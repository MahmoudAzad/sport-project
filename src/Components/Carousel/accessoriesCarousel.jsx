import React, { useEffect, useState } from 'react';
import HomeCarouselHelper from '../Helper/homeCarouselHelper';

const AccessoriesCarousel = () => {
    const [accessories , setAccessories] = useState("") ;

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

        fetch("http://localhost:1337/accessories", requestOptions)
            .then(response => response.json())
            .then(result => { setAccessories(result) });
    }, [])

    if(!accessories){ return <p>
        please wait...
    </p>}

    console.log("access =>" , accessories);
    return ( 
        <HomeCarouselHelper products={accessories} title="لوازم و تجهیزات بدنسازی" />
     );
}
 
export default AccessoriesCarousel;