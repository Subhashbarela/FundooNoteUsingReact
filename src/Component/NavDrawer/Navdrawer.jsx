import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';
import ContentCopyRoundedIcon   from '@mui/icons-material/ContentCopyRounded';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import HeaderBar from '../Header/HeaderBar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function Navdrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };
    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Reminder', icon: <AddAlertRoundedIcon />, route: '/' },
        { id: 3, name: 'Edit Labels', icon: <ContentCopyRoundedIcon/>, route: '/' },
        { id: 4, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 5, name: 'Trash', icon: <Delete />, route: '/delete' },
    ]
    

    return (
        <Box sx={{ display: 'flex' }}>
            <HeaderBar
                open={open}
                handleDrawer={handleDrawer}
            />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader></DrawerHeader>
                <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))
        }
        </List>
            </Drawer>
        </Box>
    );
}

export default Navdrawer;