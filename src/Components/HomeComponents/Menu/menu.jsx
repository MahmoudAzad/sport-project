import React, { Fragment } from 'react';
import MobileMenu from './mobileMenu';
import SubMenu from './submenu';

const Menu = () => {
    return (
        <Fragment>
            <SubMenu />
            <MobileMenu />
        </Fragment>
    );
}

export default Menu;