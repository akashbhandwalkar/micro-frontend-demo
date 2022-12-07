import React, { useState } from 'react';
import './Header.css';
function Header(props) {
    const [count, setCount] = useState(0);

    window.addEventListener("items_added_to_cart", (event) => {
        console.log("received");
        setCount(count + 1);
    });

    return (
    <header className="site-header">
        <div className="navbar navbar-regular menu-right navbar-home top-nav-collapse">
            <div className="container triangle">
                
                <div className="site-logo"></div>
                
                <nav className="main-navigation">
                    <ul className="menu">
                        <li style={{
                            marginRight: '20px'
                        }}>
                            {
                                count + " items"
                            }
                        </li>
                        <li className="menu-item active ">
                            <p>MICRO FRONTEND MEETUP</p>

                        </li>
                    </ul>    
                </nav>
            </div>
        </div>
</header>
    );
}

export default Header;