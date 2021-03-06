import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { Typography, useMediaQuery } from '@mui/material';

export default function ServiceMenu() {

  const matches = useMediaQuery('(min-width:900px)');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Typography
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={({
          fontFamily: "Overpass",
          fontStyle: "normal",
          fontSize: "15px",
          lineHeight: "19px",
          color: '#000',
          textDecoration: 'none',
          fontWeight: "500",
          marginLeft: "40px",
          textAlign: 'center'
        })}
      >
        Services
      </Typography>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          component="a"
          href='/Contract'
        >
          Contract Manufacturing
        </MenuItem>
        <MenuItem
          component="a"
          href='/Private'
        >
          Private
        </MenuItem>
        <MenuItem
          component="a"
          href='/TurnProject'
        >
          Turn key-projects
        </MenuItem>
      </Menu>
    </div>
  );
}




