import React, { useEffect, useState } from 'react';
import ShowProductsHelper from '../../Helper/showProductsHelper';

const Tshirts = () => {

    const [tshirts , setTshirts] =useState("");

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

        fetch("http://localhost:1337/tshirts", requestOptions)
            .then(response => response.json())
            .then(result => { setTshirts(result) });
    }, [])

    if(!tshirts){
        return <p>
            please wait ...
        </p>
    }
    console.log("ring sleevs result =>" , tshirts);

    return ( 
        <ShowProductsHelper products={tshirts}  /> 
     ); 
}
 
export default Tshirts;