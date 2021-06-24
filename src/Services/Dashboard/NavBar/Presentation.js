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

import modules from "../../../modules";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "../styles/styles";
import PropTypes from "prop-types";
import { Button, useTheme } from "@material-ui/core";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
function Presentation(props) {
  const { handleDrawerClose, handleDrawerOpen, open, _signOut, auth } = props;

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      {/* {!auth.uid ? <Redirect to="/signin" /> : null} */}

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
          <Typography variant="h6" noWrap>
            KUMUDA
          </Typography>
          <div className={classes.navButton}>
            <Button onClick={_signOut} color="inherit">
              LogOut
            </Button>
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
              <Link to={icon.link}>
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
  );
}

Presentation.propTypes = {
  open: PropTypes.bool,
};

export default Presentation;
