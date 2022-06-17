import React, { useEffect, useState } from 'react';
import HomeCarouselHelper from '../Helper/homeCarouselHelper';

const ShakerCarousel = () => {
    const [shaker , setShaker] = useState("") ;

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

        fetch("http://localhost:1337/shaker-carousels", requestOptions)
            .then(response => response.json())
            .then(result => { setShaker(result) });
    }, [])

    if(!shaker){ return <p>
        please wait...
    </p>}
    return ( 
        <HomeCarouselHelper products={shaker} title="شیکر و جاگ‌واتر" />
     );
}
 
export default ShakerCarousel;