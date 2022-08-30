import React, { useEffect, useState } from 'react';
import ShowProductsHelper from '../../Helper/showProductsHelper';
import { Paginate } from '../../Utils/paginate';

const RingSleeves = () => {

    const [ringSleeves , setRingSleeves] =useState("");


   


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

        fetch("http://localhost:1337/ring-sleeves", requestOptions)
            .then(response => response.json())
            .then(result => { setRingSleeves(result) });
    }, [])

    if(!ringSleeves){
        return <p>
            please wait ...
        </p>
    }
   
    console.log("ring sleevs result =>" , ringSleeves);

    return ( 
        <ShowProductsHelper products={ringSleeves}  /> 
     ); 
}
 
export default RingSleeves;