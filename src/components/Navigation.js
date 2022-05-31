import React from "react";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AboutIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/WorkOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export const Navigation = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/ReactPortfolio'
    },
    {
        title: 'About',
        icon: <AboutIcon />,
        link: '/ReactPortfolio/aboutme'
    },
    {
        title: 'Projects',
        icon: <WorkIcon />,
        link: '/ReactPortfolio/projects'
    },
    {
        title: 'Resume',
        icon: <FileDownloadOutlinedIcon />,
        link: '/assets/Resume.pdf'
    },

]