import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'

const NavBar = (props) => {
  let nav = props.user ?
      <List component='nav'>
        <ListItem component='div'>
          <ListItemText inset>
            <TypoGraphy color='inherit' varient='title'>
              {props.dir}
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                <Link to='/survey/create'>CREATE</Link>
              </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                WELCOME, {props.user.name}
              </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                <Link to='/survey/index/user'>YOUR SURVEYS</Link>
              </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                <Link to='/survey/index'>All SURVEYS</Link>
              </TypoGraphy>
          </ListItemText>            
        </ListItem>
      </List>
    :
      <List component='nav'>
        <ListItem component='div'>
          <ListItemText inset>
            <TypoGraphy color='inherit' varient='title'>
              {props.dir}
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                <Link to='/login'>LOG IN</Link>
              </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                WELCOME, Anon
              </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                <Link to='/signup'>SIGN UP</Link>
              </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                <Link to='/survey/index'>All SURVEYS</Link>
              </TypoGraphy>
          </ListItemText>            
        </ListItem>
      </List>
  return nav
  
};

export default NavBar;