import React from 'react';
import "./sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon = {HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <hr></hr>
        </div>
    )
}

export default Sidebar;
