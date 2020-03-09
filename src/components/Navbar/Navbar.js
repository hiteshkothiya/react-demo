import React from 'react';
import './_scss/_index.scss';
import { navBarLinks } from "../../config/nav-bar-links";

const navbar = () => {
    const links = navBarLinks.map(navBarLink => ({
        label: navBarLink.label,
        href: navBarLink.link
    }));

    return(
        <nav className="Navbar__navigation">
            <div className="Navbar__navigation-items">
                <ul>
                    {links.map(link => 
                        <li key={link.label}><a href={link.href}>{link.label}</a></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default navbar;