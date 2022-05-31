import React from "react";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AboutIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/WorkOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export const Navigation = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/'
    },
    {
        title: 'About',
        icon: <AboutIcon />,
        link: '/aboutme'
    },
    {
        title: 'Projects',
        icon: <WorkIcon />,
        link: '/projects'
    },
    {
        title: 'Resume',
        icon: <FileDownloadOutlinedIcon />,
        link: '/assets/Resume.pdf'
    },

]