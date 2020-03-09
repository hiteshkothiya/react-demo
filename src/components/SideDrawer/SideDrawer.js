import React from 'react';
import './_scss/_index.scss';
import Navbar from '../Navbar/Navbar';

const sideDrawer = props => {
    let drawerClasses = 'SideDrawer';

    if(props.show){
        drawerClasses = 'SideDrawer open';
    }
    
    return(
        <div className={drawerClasses}>
            <Navbar />
        </div>
    );
};

export default sideDrawer;