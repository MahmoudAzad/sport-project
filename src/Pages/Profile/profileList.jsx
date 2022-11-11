import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { loadState } from '../../Redux/localStorage';


const ProfileList = () => {

    const localStore = loadState();
    console.log('load profile =>', localStore);

    if (localStore && localStore.isLogged == true && localStore.email != "" ) {

        return (

            <div className="profile-list-container container mt-5">
                <div className="profile-list">
                    <h5>حساب کاربری من</h5>

                    <Link className="link" to={"/profile"}>
                        پیشخوان
                    </Link>

                    <Link className="link" to={"/profile/order"}>
                        سفارشات
                    </Link>
                    <Link className="link" to={"/profile/downloads"}>
                        دانلود ها
                    </Link>
                    <Link className="link" to={"/profile/adresses"}>
                        آدرس ها
                    </Link>
                    <Link className="link" to={"/profile/edit-account"}>
                        جزئیات حساب
                    </Link>
                    <Link className="link" to={"/profile/edit-account"}>
                        علاقه مندی
                    </Link>
                    <Link className="link" to={"/logout"}  >
                        خروج
                    </Link>
                </div>

                <Outlet className="profile-list-outlet" />
            </div>
        );

    }
    else {
        return (
            <Navigate to="/login" />
        );

    }
}


export default ProfileList;