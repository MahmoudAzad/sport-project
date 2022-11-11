import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisePhotos = () => {
    return (
        <div className="AdverticePhoto-container  ">
            <img src="/images\advertise-photos\ad1.jpg" alt="خرید عمده" className="col-6 col-md-3" />
            <img src="/images\advertise-photos\ad2.jpg" alt="کارت هدیه" className="col-md-3 AdverticePhoto-2" />
            <Link to="/shaker-printing">
                <img src="/images\advertise-photos\ad3.jpg" alt="چاپ شیکر" className="col-6 col-md-3" />
            </Link>
            <img src="/images\advertise-photos\ad4.jpg" alt="کارت هدیه" className="col-md-3 AdverticePhoto-2" />

        </div>
    );
}

export default AdvertisePhotos;