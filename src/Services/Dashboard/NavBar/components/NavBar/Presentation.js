import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SignIn from "../../../../Authentication/components/Authentication/SignIn";
import modules from "../../../../../modules";
import studentModules from "../../../../../studentModules";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "../../../styles/styles";
import PropTypes from "prop-types";
import { Button, Menu, MenuItem, useTheme } from "@material-ui/core";
import { Redirect } from "react-router";
import { Link, useLocation } from "react-router-dom";
import Razorpay from "../../../Payment/Razorpay";
import { makeStyles } from "@material-ui/core/styles";
import Student from "../../../../Register/components/Student";
import Avatar from "@material-ui/core/Avatar";
// import Stack from "@material-ui/core/Stack";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import StudentLoginData from "../StudentLoginData";
import { AccountCircle } from "@material-ui/icons";
import EmployeeProfile from "../EmployeeProfile/EmployeeProfile";

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
function Presentation(props) {
  const { _signOut, auth, usersData, people, collectionData } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openIcon = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open1 = Boolean(anchorE2);

  const handleMenu1 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorE2(null);
  };
  const classes = useStyles();
  const theme = useTheme();

  const classes1 = useStyles1();
  return (
    <div>
      {collectionData ? (
        <div>
          {collectionData.role === "admin" ? (
            <div className={classes.root}>
              {!auth.uid ? <Redirect to={`/signin`} /> : null}

              <div>
                <CssBaseline />
                <AppBar
                  position="fixed"
                  className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}
                >
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                      })}
                    >
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    ></IconButton>
                    <Typography variant="h6" noWrap>
                      ADMIN
                    </Typography>

                    <div className={classes.align}>
                     
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu1}
                          color="inherit"
      
                        >
                         <Avatar alt="Remy Sharp" src={collectionData.photoUrl}  />
                        </IconButton>
                        <Menu
                         id="menu-appbar"
                          anchorE2={anchorE2}
                          keepMounted
                          anchorOrigin={{
                            vertical: "center",
                            horizontal: "right",
                            
                          }}
                          
                          open={open1}
                          onClose={handleClose1}
                        >
                          <MenuItem style={{ textDecoration: "none" }}>
                            <EmployeeProfile />
                          </MenuItem>

                          <MenuItem color="inherit" onClick={_signOut}>
                            <Button variant="outlined" color="primary">
                              LogOut
                            </Button>
                          </MenuItem>
                        </Menu>
                      
                      </div>
                  </Toolbar>
                </AppBar>
                <Drawer
                  variant="permanent"
                  className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  })}
                  classes={{
                    paper: clsx({
                      [classes.drawerOpen]: open,
                      [classes.drawerClose]: !open,
                    }),
                  }}
                >
                  <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                      ) : (
                        <ChevronLeftIcon />
                      )}
                    </IconButton>
                  </div>
                  <Divider />

                  {modules.map((icon) => {
                    return (
                      <List>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          onClick={handleDrawerClose}
                          to={icon.link}
                        >
                          <ListItem>
                            <Tooltip title={icon.text}>
                              <ListItemIcon>{icon.icon}</ListItemIcon>
                            </Tooltip>
                            <ListItemText primary={icon.text} />
                          </ListItem>
                        </Link>
                      </List>
                    );
                  })}
                </Drawer>
              </div>
            </div>
          ) : (
            <div className={classes.root}>
              {!auth.uid ? <Redirect to="/signin" /> : null}

              {collectionData.role === "student" ? (
                <div>
                  <CssBaseline />
                  <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                      [classes.appBarShift]: open,
                    })}
                  >
                    <Toolbar>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      ></IconButton>
                      <Typography variant="h6" noWrap>
                        STUDENT
                      </Typography>
                      <div className={classes.navButton}>
                        <Button onClick={_signOut} color="inherit">
                          LogOut
                        </Button>
                      </div>
                    </Toolbar>
                  </AppBar>
                  <div
                    style={{
                      padding: "45px",
                      marginTop: "25px",
                      marginLeft: "570px",
                    }}
                  >
                    <Razorpay />
                  </div>
                  <div style={{}}>
                    <StudentLoginData />
                  </div>
                </div>
              ) : (
                <SignIn />
              )}
            </div>
          )}
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Presentation;
