import * as React from 'react';
import { useTheme, styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { ReactComponent as Logo } from '../../assets/Icons/logo.svg';
import './header.scss';
import 'flag-icon-css/css/flag-icon.min.css';
import { Typography } from '@mui/material';

//#region Left Menu
const drawerWidth = 170;
const IconButtonMenu = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ open }) => ({
    mr: 2, 
    ...(open && { display: 'none' }) 
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),
}));

const Menuleft = styled(SwipeableDrawer)({
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});
//#endregion Left Menu

//#region Listas
const menuOptions = [
  { displayName: 'CARS & RATES', direction: 'card and rates' },
  { displayName: 'INSURANCE', direction: 'insurance' },
  { displayName: 'FAQ', direction: 'faq' },
  { displayName: 'CONTACT', direction: 'contact' },
  { displayName: 'BLOG', direction: 'blog' },
]

const lenguageOption = [
  { code:'us', displayName: "English" },
  { code:'es', displayName: "Español" },
  { code:'fr', displayName: "Français" },
  { code:'it', displayName: "Italien" },
  { code:'ru', displayName: "Russo" }
]
//#endregion

//#region Lenguage Menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: '-5px',
    minWidth: 'max-content',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    backgroundColor: 'rgb(255,255,255)'
  },
}));
//#endregion Lenguage Menu

const Header = () => {
  //#region Const
  const theme = useTheme();
  const [openMenuLeft, setopenMenuLeft] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  //#endregion

  //#region Functions
  const GoTo = (selectedLeftMenuItem) => {
    console.log("add code to search the new direction " + selectedLeftMenuItem)
  }
  //#endregion

  //#region Flag Button
  function FlagButton() {
    //#region Const
    const [currentLenguageCode, setcurrentLenguageCode] = React.useState("us");
    const [openMenuLenguage, setOpenMenuLenguage] = React.useState(null);
    const openLenguage = Boolean(openMenuLenguage);
    //#endregion

    //#region Functions
    const handleLenguageMenuClick = (event) => {
      setOpenMenuLenguage(event.currentTarget);
    };
    const handleLenguageMenuClose = () => {
      setOpenMenuLenguage(null);
    };
    const changeLenguage = (lenguage) => {
      setcurrentLenguageCode(lenguage)
      setOpenMenuLenguage(null)
      console.log("add code to change the lenguage to " + currentLenguageCode)
    }
   //#endregion
    
    return <Box>
              <IconButton  className="flagBtn" onClick={handleLenguageMenuClick}>
                <KeyboardArrowDownIcon />
                <span className={`flag-icon flag-icon-${currentLenguageCode}`}></span>
              </IconButton>
              <StyledMenu anchorEl={openMenuLenguage} open={openLenguage} onClose={handleLenguageMenuClose} >
                {lenguageOption.map((x, i) => {
                      return <MenuItem key={i} onClick={handleLenguageMenuClose} onClick={() => changeLenguage(x.code)}>
                              <Button className="flagMenuItem">
                                <span className={`flag-icon flag-icon-${x.code}`}></span>
                                <span className="lenguageName">{x.displayName}</span>
                              </Button>
                            </MenuItem>
                            
                })}
              </StyledMenu>
            </Box>
  }
  //#endregion Flag Button
  
  //#region Menu Left
  function MenuLeft({openMenuLeft}){
    //#region Functions
    const handleLeftMenuOpen = () => {
      setopenMenuLeft(true);
    };
    const handleLeftMenuClose = () => {
      setopenMenuLeft(false);
    };
    //#endregion
    
    //#region Resize Listener
    React.useEffect(() => {
      function handleResize() {
        if(window.innerWidth>900)
          handleLeftMenuClose();
      }
      window.addEventListener('resize', handleResize)
    })
    //#endregion Resize Listener
    
    return  <Box>
              <IconButtonMenu className="menuIcon" onClick={handleLeftMenuOpen} open={openMenuLeft}>
                <MenuIcon />
              </IconButtonMenu>
              <Menuleft anchor="left" open={openMenuLeft} onClose={handleLeftMenuClose} onOpen={handleLeftMenuOpen} >
                <Box className="drawerMenuHeader">
                  <Button className="closeMenuBtn" onClick={handleLeftMenuClose}>
                    <ChevronLeftIcon />
                    <Typography className="testtypo">Menu</Typography>
                  </Button>
                </Box>
                <Divider />
                <List>
                  {menuOptions.map((x, i) => (
                    <ListItem key={i} button onClick={() => GoTo(x.direction)}>
                      <ListItemText className="menuListItem" primary={x.displayName} />
                    </ListItem>
                  ))}
                </List>
              </Menuleft>
            </Box>
  }
  //#endregion Menu Left

  return (
    <Box>
      <CssBaseline />
      <AppBar open={openMenuLeft}>
        <Toolbar >
          { isMobile ?
            (<>
              <MenuLeft openMenuLeft={openMenuLeft} />
              <Logo className="logo"/>
              { (openMenuLeft && window.innerWidth<450) ? null : <FlagButton /> }
            </>) : (<>
              <Logo className="logo"/>
              <Box className="headerOptions">
                {menuOptions.map((x, i) => {
                  return <Button key={i} className="menuBtn" onClick={() => GoTo(x.direction)}>
                           {x.displayName}
                         </Button>
                })}
               <FlagButton />
              </Box>
            </>)
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
