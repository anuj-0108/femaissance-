import React from 'react'
import { AppBar,Toolbar, makeStyles, withStyles,Box, IconButton,Drawer, List, ListItem } from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import './header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles(theme =>({
    header:{
       background:'#A239EA',
       height:'100px',
    },
    logo:{
        width:170,
        marginTop:'-20px',
        marginLeft: -15,
        height:'130%'
    },
    list:{
        width:200,
        '& > *': {
        //   marginLeft:20,
        // padding:20
        }
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            marginLeft:'auto',
        },
    },
    headerButtons:{
        margin: '0 0% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}));

const ToolBar = withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);

const Header = () => {
    const classes= useStyle();

    const [open,setOpen] = useState(false);

    const handleClose =()=>{
        setOpen(false);
    }

    const handleOpen =()=>{
        setOpen(true);
    }

    const list =()=>{
        return (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem >
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
        )
    }

    return (
        <AppBar className={classes.header} style={{position:'relative'}}>
            <div className='d-flex justify-content-end'>
                <div id="google_translate_element" style={{padding:'3px 3px 0 0'}}></div>
            </div>
            <ToolBar>
            <NavLink style={{height:'100%'}} exact to="/" id="head-nav" onClick={()=>{
                setTimeout(()=>{
                    document.getElementById('head-nav').classList.remove("active");
                },10)
            }}><img src={process.env.PUBLIC_URL + '/images/navimg.png'}  className={classes.logo}/></NavLink>
                <IconButton 
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <span className={classes.headerButtons}><HeaderButtons /></span>
                 
            </ToolBar>
        </AppBar>
    )
}

export default Header;
