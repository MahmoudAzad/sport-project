import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    console.log("props in profile =>" , props);
    return ( 

        <div className="profile-container container text-center mt-5">
        <p>
        سلام {props.user} 
        </p>

        <p>
            از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.
        </p>
        </div>
    );
}

function mapStateToProps(state) {
    console.log('state map state in profile =>' , state);  

    return {
        user: state.user.username
    }
}

export default connect(mapStateToProps)(Profile);