import React, { useEffect, useState } from 'react';
import ShowProductsHelper from '../../Helper/showProductsHelper';

const Sweatshirts = () => {

    const [sweatshirts , setSweatshirts] =useState("");

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

        fetch("http://localhost:1337/sweatshirts", requestOptions)
            .then(response => response.json())
            .then(result => { setSweatshirts(result) });
    }, [])

    if(!sweatshirts){
        return <p>
            please wait ...
        </p>
    }
    console.log("ring sleevs result =>" , sweatshirts);

    return ( 
        <ShowProductsHelper products={sweatshirts}  /> 
     ); 
}
 
export default Sweatshirts;