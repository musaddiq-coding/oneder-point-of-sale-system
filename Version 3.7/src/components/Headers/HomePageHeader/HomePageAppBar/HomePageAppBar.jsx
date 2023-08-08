
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom'
import Demos from '../SideMenu/SideMenu'
import appbarstyless from './appbarstyles.module.css'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export default function AppBarComp(props) {
  return (
    <div className={appbarstyless.appbarrmotherdiv}>
      <AppBar position="static" sx={{ backgroundColor: '#000312' }}>
        <StyledToolBar >
          <Demos />
          <div>
            <Button sx={{backgroundColor:'white'}} onClick={props.toggleTheme}>Change Color</Button>
            <NavLink to='/' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Home</Button></NavLink>
            <NavLink to='/catagaries' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Catagaries</Button></NavLink>
            <NavLink to='/orders' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Orders</Button></NavLink>
            <NavLink to='/signup' style={{ textDecoration: 'none' }}><Button sx={{ backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Sign Up</Button></NavLink>
            <NavLink to='/signin' style={{ textDecoration: 'none' }}><Button sx={{ backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Sign In</Button></NavLink>
            {/* <header>
              <nav>
                <ul> */}
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            {/* <li><NavLink to='/about'>About</NavLink></li> */}
            {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
            {/* <li><NavLink to='/orders'>Orders</NavLink></li> */}
            {/* </ul>
              </nav>
            </header> */}
          </div>
        </StyledToolBar>
      </AppBar>
    </div >
  );
}
