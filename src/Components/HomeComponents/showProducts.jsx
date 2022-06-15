import React, { useEffect, useState } from 'react';

const ShowProducts = () => {
    const [showPro, setShowPro] = useState("");

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

        fetch("http://localhost:1337/show-pros", requestOptions)
            .then(response => response.json())
            .then(result => { setShowPro(result) });
    }, [])

    if (!showPro) {
        return <p>
            please wait...
        </p>
    }

    return (
        <div className="show-pro-container container">
            {showPro.map((pro) => (
                <div className="show-pro-item">
                    <img  src={`http://localhost:1337${pro.img.url}`} />
                </div>
            ))}


        </div>
    );
}

export default ShowProducts;