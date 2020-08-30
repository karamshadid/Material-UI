import React from "react";
import AppBar from "@material-ui/core/AppBar";
import LocalMovies from "@material-ui/icons/LocalMovies";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import { MovieContext } from "./Context";
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
    
  },
  nested: {
    paddingLeft: theme.spacing(4)
  
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [movie] = React.useContext(MovieContext);

  //console.log(movie);
  /*For list*/
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="relative" >
        <Toolbar>
          <LocalMovies className={classes.icon} />
          <Typography variant="h6" backgroundColor="inherit" noWrap>
            Movie World
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={{ paddingLeft: "600px" }}
          >
            Available movies: {movie.length}
          </Typography>

          <Typography style={{ paddingLeft: "100px" }}>
            <List>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Chart" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Buy movie" />
                  </ListItem>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Rent movie" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
