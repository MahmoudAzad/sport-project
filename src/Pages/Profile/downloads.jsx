import React from 'react';
import {  ExclamationCircleOutlined } from '@ant-design/icons';

const Downloads = () => {
    return ( 
        <div className="order-container">
            <p><ExclamationCircleOutlined style={{marginLeft:"15px" , fontSize:"20px"}}/>هیچ دانلودی در دسترس نیست. </p>
        </div>
     );
}
 
export default Downloads;