import React, { useState } from "react";
import { SearchOutlined, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';

const MobileNavbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="mobile-navbar-container">

                <UnorderedListOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" onClick={showDrawer} />
                <img src="Gisha-Logotype-200.png" width="150" height="40" />
                <div>
                    <SearchOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" />
                    <ShoppingCartOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" />
                </div>

        </div>
    )

}

export default MobileNavbar;