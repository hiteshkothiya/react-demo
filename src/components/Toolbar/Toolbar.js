import React from 'react';
import './_scss/_index.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { navBarLinks } from "../../config/nav-bar-links";

const toolbar = (props) => {
    const links = navBarLinks.map(navBarLink => ({
        label: navBarLink.label,
        href: navBarLink.link
    }));

    return(
        <header className="Toolbar">
            <nav className="Toolbar__navigation">
                <div className="Toolbar__navigation-button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
                <div className="Toolbar__logo">LOGO</div>
                <div className="Toolbar__spacer"></div>
                <div className="Toolbar__navigation-items">
                    <ul>
                        {links.map(link => 
                            <li key={link.label}><a href={link.href}>{link.label}</a></li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default toolbar;