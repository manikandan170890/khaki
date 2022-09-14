import React from 'react';
import AboutSidebar from './AboutSidebar';
import CatSidebar from './CatSidebar';
import ArchivesSidebar from './ArchivesSidebar';
import LinksSidebar from './LinksSidebar';

const Sidebar = () => {
    return <>        
        <div id="sidebar">
            <AboutSidebar/>
            <CatSidebar/>
            <ArchivesSidebar/>
            <LinksSidebar/>
            <div class="clear"></div>
            </div>   
    </>
}

export default Sidebar;