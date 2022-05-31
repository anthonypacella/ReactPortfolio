import React from "react";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AboutIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/WorkOutline';

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
    }
]