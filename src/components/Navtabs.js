import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

//mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function NavTabs() {
    const location = useLocation();
    const [value, setValue] = useState(() => {
        switch (location.pathname) {
            case '/history':
                return 1;
            case '/project':
                return 2;
            case '/background':
                return 3;
            case '/languages':
                return 4;
            case '/algorithms':
                return 5;
            case '/tmi':
                return 6;
            default:
                return 0;
        }
    });

    useEffect(() => {
        switch (location.pathname) {
            case '/history':
                setValue(1);
                break;
            case '/project':
                setValue(2);
                break;
            case '/background':
                setValue(3);
                break;
            case '/languages':
                setValue(4);
                break;
            case '/algorithms':
                setValue(5);
                break;
            case '/tmi':
                setValue(6);
                break;
            default:
                setValue(0);
        }
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered>
            <Tab icon={<AccountBoxIcon />} label="Main" component={Link} to="/" />
            <Tab icon={<MenuBookIcon />} label="History" component={Link} to="/history" />
            <Tab icon={<PersonPinIcon />} label="Project" component={Link} to="/project" />
            <Tab icon={<PersonPinIcon />} label="Background" component={Link} to="/background" />
            <Tab icon={<PersonPinIcon />} label="languages" component={Link} to="/languages" />
            <Tab icon={<PersonPinIcon />} label="algorithms" component={Link} to="/algorithms" />
            <Tab icon={<PersonPinIcon />} label="tmi" component={Link} to="/tmi" />
        </Tabs>
    );
}

export default NavTabs;
