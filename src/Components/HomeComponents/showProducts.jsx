import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import Loading from "../Common/loading";

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

    if (!showPro) { return <Loading /> }

    return (
        <div className="col-md-10 col-11 mx-auto mt-5 ">

            <Divider><h5 className="font-weight-bold">دسته‌بندی‌ها</h5></Divider>
            <div className="row">
                {showPro.map((pro) => (
                    <img className="col-6 col-md-3 mt-2 "
                        src={`http://localhost:1337${pro.img.url}`}
                        key={pro.id} alt="لوازم ورزشی مردانه و زنانه"
                        style={{borderRadius:"25px"}}
                    />  
                ))}
            </div>
        </div>

    );
}

export default ShowProducts;